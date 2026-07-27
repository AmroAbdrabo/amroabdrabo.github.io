# WebXR Privacy-Filter Phone Demo

A small WebXR / Three.js experiment in a low-poly “Blocks” style.

## What it does

- Places a smartphone with sample text on a wooden desk.
- `B` makes the phone text **bigger**.
- `S` makes the phone text **smaller**.
- Left/right arrow keys move the desktop viewer sideways.
- The phone display fades to black as the viewing angle moves away from straight-on, imitating a privacy screen protector.
- In VR, physical headset movement changes the viewing angle naturally.
- XR controller thumbsticks can strafe left/right.
- Right-hand controller select/trigger makes text bigger.
- Left-hand controller select/trigger makes text smaller.
- Controller squeeze also makes text smaller as a fallback.

## Run it

Because this uses JavaScript modules and WebXR, serve the folder through a web server rather than opening `index.html` directly.

Desktop quick start:

```bash
python3 -m http.server 8080
```

Then open:

```text
http://localhost:8080
```

`localhost` is treated as a secure context by browsers for development.

## VR / headset use

For an actual headset, WebXR generally requires a secure context (HTTPS) and a WebXR-capable browser/device.

Host this folder on an HTTPS site, then press the **ENTER VR** button.

## Main parameters to tune

Inside `index.html`, find:

```js
function privacyVisibility(angleDeg) {
  const start = 14;
  const end = 35;
```

- `start`: angle where dimming begins.
- `end`: angle where the display has effectively become black.

You can also edit `minFont`, `maxFont`, and the `setFont()` step size.
