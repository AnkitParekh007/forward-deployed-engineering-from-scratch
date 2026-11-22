"""Offline professional practice: retrieval, evaluation and service economics.

All examples are synthetic; no network, API key or external packages required.
Run: python3 curriculum/assets/pro_lab.py
"""
from statistics import mean
from math import ceil


def retrieval_metrics(ranked: list[str], relevant: set[str], k: int) -> tuple[float, float]:
    if k <= 0 or not relevant:
        raise ValueError('k and relevant documents must be nonempty')
    top = list(dict.fromkeys(ranked))[:k]
    recall = len(set(top) & relevant) / len(relevant)
    reciprocal_rank = next((1 / (i + 1) for i, doc in enumerate(top) if doc in relevant), 0.0)
    return recall, reciprocal_rank


def token_cost(input_tokens: int, output_tokens: int, input_rate: float, output_rate: float) -> float:
    """Rates are hypothetical currency units per million tokens, not provider prices."""
    if min(input_tokens, output_tokens, input_rate, output_rate) < 0:
        raise ValueError('negative usage or rate')
    return (input_tokens * input_rate + output_tokens * output_rate) / 1_000_000


def release_metrics(cases: list[dict]) -> dict:
    if not cases:
        raise ValueError('at least one case required')
    passed = sum(c['schema_valid'] and c['grounded'] and c['expected_route'] == c['actual_route'] for c in cases)
    latency = sorted(c['latency_ms'] for c in cases)
    return {'pass_rate': passed / len(cases), 'p95_ms': latency[ceil(.95 * len(latency)) - 1],
            'cost_per_pass': sum(c['cost'] for c in cases) / passed if passed else None}


if __name__ == '__main__':
    benchmark = [(['policy-2', 'policy-1', 'faq'], {'policy-1'}), (['faq', 'policy-3'], {'policy-3', 'faq'})]
    measurements = [retrieval_metrics(r, g, 3) for r, g in benchmark]
    assert mean(x[0] for x in measurements) == 1
    assert mean(x[1] for x in measurements) == .75
    assert retrieval_metrics(['wrong'], {'right'}, 1) == (0.0, 0.0)
    cost = token_cost(600, 120, 2, 8)
    assert abs(cost - .00216) < 1e-9
    fixtures = [
        {'schema_valid': True, 'grounded': True, 'expected_route': 'review', 'actual_route': 'review', 'latency_ms': 450, 'cost': cost},
        {'schema_valid': True, 'grounded': False, 'expected_route': 'review', 'actual_route': 'answer', 'latency_ms': 900, 'cost': cost},
    ]
    result = release_metrics(fixtures)
    assert result['pass_rate'] == .5 and result['p95_ms'] == 900
    print('Recall@3:', mean(x[0] for x in measurements), 'MRR@3:', mean(x[1] for x in measurements))
    print('Hypothetical cost per request:', cost, 'Release metrics:', result)
    print('Professional offline practice checks passed.')
