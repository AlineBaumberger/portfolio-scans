from plyfile import PlyData
import math

ply = PlyData.read("assets/models/argente_clean_vf.ply")

v = ply["vertex"]

for name in [
    "x","y","z",
    "scale_0","scale_1","scale_2",
    "rot_0","rot_1","rot_2","rot_3",
    "opacity"
]:
    values = v[name]

    bad = [x for x in values if not math.isfinite(x)]

    print(
        name,
        "min=", min(values),
        "max=", max(values),
        "invalides=", len(bad)
    )