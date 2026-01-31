
import json

coords = [
    [31.191409, -22.25151], [30.659865, -22.151567], [30.322883, -22.271612], [29.839037, -22.102216],
    [29.432188, -22.091313], [28.794656, -21.639454], [28.02137, -21.485975], [27.727228, -20.851802],
    [27.724747, -20.499059], [27.296505, -20.39152], [26.164791, -19.293086], [25.850391, -18.714413],
    [25.649163, -18.536026], [25.264226, -17.73654], [26.381935, -17.846042], [26.706773, -17.961229],
    [27.044427, -17.938026], [27.598243, -17.290831], [28.467906, -16.4684], [28.825869, -16.389749],
    [28.947463, -16.043051], [29.516834, -15.644678], [30.274256, -15.507787], [30.338955, -15.880839],
    [31.173064, -15.860944], [31.636498, -16.07199], [31.852041, -16.319417], [32.328239, -16.392074],
    [32.847639, -16.713398], [32.849861, -17.979057], [32.654886, -18.67209], [32.611994, -19.419383],
    [32.772708, -19.715592], [32.659743, -20.30429], [32.508693, -20.395292], [32.244988, -21.116489],
    [31.191409, -22.25151]
]

# Calculate bounds
lons = [c[0] for c in coords]
lats = [c[1] for c in coords]
min_lon, max_lon = min(lons), max(lons)
min_lat, max_lat = min(lats), max(lats)

# Viewbox
width, height = 800, 650
padding = 40

# Scaling
lon_range = max_lon - min_lon
lat_range = max_lat - min_lat
scale_x = (width - padding * 2) / lon_range
scale_y = (height - padding * 2) / lat_range
scale = min(scale_x, scale_y) # Keep aspect ratio

# Transform
path_cmds = []
for i, (lon, lat) in enumerate(coords):
    x = padding + (lon - min_lon) * scale
    y = height - padding - (lat - min_lat) * scale # Flip Y
    
    cmd = "M" if i == 0 else "L"
    path_cmds.append(f"{cmd} {x:.1f} {y:.1f}")

path_cmds.append("Z")
print("path_d = '" + " ".join(path_cmds) + "'")

# Transform Cities
cities = {
    "Victoria Falls": [25.8307, -17.9329],
    "Bulawayo": [28.5833, -20.1500],
    "Gweru": [29.8167, -19.4500],
    "Kwekwe": [29.8167, -18.9167],
    "Kadoma": [29.9167, -18.3333],
    "Chegutu": [30.1407, -18.1302],
    "Harare": [31.0522, -17.8292],
    "Mutare": [32.6694, -18.9728], 
    "Hwange": [26.4912, -18.3693]
}

print("city_coords = {")
for name, (lon, lat) in cities.items():
    x = padding + (lon - min_lon) * scale
    y = height - padding - (lat - min_lat) * scale
    # Calculate % for CSS
    pct_x = (x / width) * 100
    pct_y = (y / height) * 100
    print(f'  "{name}": {{ x: {pct_x:.1f}, y: {pct_y:.1f} }},')
print("}")
