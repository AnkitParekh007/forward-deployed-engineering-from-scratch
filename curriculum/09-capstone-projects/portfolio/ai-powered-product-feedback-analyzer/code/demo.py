"""Run an offline baseline for AI-Powered Product Feedback Analyzer."""
from pathlib import Path
import json, sys
sys.path.insert(0,str(Path(__file__).resolve().parents[4]/'assets'))
from field_lab import DEMOS
print(json.dumps(DEMOS[4](),indent=2))
