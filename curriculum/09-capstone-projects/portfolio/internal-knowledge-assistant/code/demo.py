"""Run an offline baseline for Internal Knowledge Assistant."""
from pathlib import Path
import json, sys
sys.path.insert(0,str(Path(__file__).resolve().parents[4]/'assets'))
from field_lab import DEMOS
print(json.dumps(DEMOS[1](),indent=2))
