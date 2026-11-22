"""Consistent, text-labeled visual cues for generated Markdown documentation."""
import re

ICONS = {
    'Why this matters': '💡', 'Learning objectives': '🎯', 'Prerequisites': '🧰',
    'Concepts': '🧠', 'Build it': '🛠️', 'Real-world scenario': '🌐',
    'Common mistakes': '⚠️', 'Checkpoint': '🧪', 'Deliverable': '📦',
    'Further reading': '📚', 'Acceptance': '✅', 'Submission': '📤',
    'Lessons': '📖', 'Mini-project': '🛠️', 'Real FDE scenario': '🌐',
    'Success criteria': '✅', 'Phase quiz': '🧪', 'Mock interview': '🎙️',
    'Customer brief': '🤝', 'Problem statement': '🔎', 'Success metrics': '📊',
    'Technical requirements': '📋', 'Architecture': '🏗️',
    'Step-by-step build guide': '🛠️', 'Test plan': '🧪', 'Deployment': '🚀',
    'Demo script': '🎬', 'Retrospective': '🔄', 'Portfolio description': '💼',
    'Runnable starter': '💻',
}


def decorate_markdown(content: str, *, lesson: bool = False) -> str:
    """Keep lesson H1s identical; retain all human-readable section labels."""
    lines = []
    fenced = False
    for line in content.splitlines(keepends=True):
        if line.lstrip().startswith('```'):
            fenced = not fenced
        if not fenced:
            match = re.match(r'^(#{1,3}) (.+?)(\n?)$', line)
            if match:
                level, label, ending = match.groups()
                icon = ICONS.get(label)
                if level == '#' and not lesson:
                    icon = ('🧪' if label.startswith(('Practice:', 'Check your')) else
                            '🛠️' if label.startswith('Mini-project:') else
                            '🧭' if label.startswith(('Phase ', '21-day', 'Zero to FDE curriculum')) else
                            '💼' if label.startswith('Career preparation') else '📘')
                if icon:
                    line = f'{level} {icon} {label}{ending}'
        lines.append(line)
    return ''.join(lines)
