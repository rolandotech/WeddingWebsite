import * as THREE from "three";

const CREAM = 0xf6f1e7;
const SAGE = 0x8b9a7d;

function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - (Math.pow(-2 * t + 2, 3) / 2);
}

function paperMaterial(color, options = {}) {
  return new THREE.MeshStandardMaterial({
    color,
    roughness: 0.86,
    metalness: 0.02,
    side: THREE.DoubleSide,
    ...options,
  });
}

function makeTriangle(width, height, direction = 1) {
  const shape = new THREE.Shape();
  shape.moveTo(-width / 2, 0);
  shape.lineTo(width / 2, 0);
  shape.lineTo(0, height * direction);
  shape.closePath();
  return new THREE.ShapeGeometry(shape);
}

function makeLetterTexture(copy) {
  const canvas = document.createElement("canvas");
  canvas.width = 1024;
  canvas.height = 1408;
  const ctx = canvas.getContext("2d");

  ctx.fillStyle = "#fbf8f2";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.strokeStyle = "rgba(164, 132, 92, 0.45)";
  ctx.lineWidth = 3;
  ctx.strokeRect(48, 48, canvas.width - 96, canvas.height - 96);
  ctx.strokeRect(62, 62, canvas.width - 124, canvas.height - 124);

  ctx.fillStyle = "#a4845c";
  ctx.font = "28px Outfit, system-ui, sans-serif";
  ctx.letterSpacing = "10px";
  ctx.textAlign = "center";
  ctx.fillText("THE MARRIAGE OF", canvas.width / 2, 280);

  ctx.fillStyle = "#1c3326";
  ctx.font = "italic 92px 'Cormorant Garamond', Georgia, serif";
  ctx.fillText(copy.groom, canvas.width / 2, 460);

  ctx.fillStyle = "#6b7f5e";
  ctx.font = "70px 'Great Vibes', cursive";
  ctx.fillText("and", canvas.width / 2, 560);

  ctx.fillStyle = "#1c3326";
  ctx.font = "italic 92px 'Cormorant Garamond', Georgia, serif";
  ctx.fillText(copy.bride, canvas.width / 2, 680);

  ctx.strokeStyle = "#8b9a7d";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(canvas.width / 2 - 80, 760);
  ctx.lineTo(canvas.width / 2 + 80, 760);
  ctx.stroke();

  ctx.fillStyle = "#5c5348";
  ctx.font = "italic 36px 'Cormorant Garamond', Georgia, serif";
  ctx.fillText(copy.date, canvas.width / 2, 860);
  ctx.font = "32px 'Cormorant Garamond', Georgia, serif";
  ctx.fillText(copy.place, canvas.width / 2, 920);

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

function makeSealTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 256;
  canvas.height = 256;
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, 256, 256);
  ctx.fillStyle = "#7a4a32";
  ctx.beginPath();
  ctx.arc(128, 128, 118, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = "#c4a574";
  ctx.lineWidth = 8;
  ctx.stroke();
  ctx.fillStyle = "#f6f1e7";
  ctx.font = "italic 64px Georgia, serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("R&D", 128, 136);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

export function createEnvelopeScene(container, copy, { onOpening, onOpened } = {}) {
  const width = () => container.clientWidth || window.innerWidth;
  const height = () => container.clientHeight || window.innerHeight;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(32, width() / height(), 0.1, 50);
  camera.position.set(0, 0.15, 8.4);

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(width(), height());
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.shadowMap.enabled = true;
  container.appendChild(renderer.domElement);

  scene.add(new THREE.AmbientLight(0xf6f1e7, 0.72));
  const hemi = new THREE.HemisphereLight(0xf6f1e7, 0x1c3326, 0.55);
  scene.add(hemi);
  const key = new THREE.DirectionalLight(0xfff6e8, 1.15);
  key.position.set(2.4, 4.2, 5);
  key.castShadow = true;
  scene.add(key);
  const rim = new THREE.DirectionalLight(0xb7c4a8, 0.45);
  rim.position.set(-3, 1.4, -2);
  scene.add(rim);

  const envelope = new THREE.Group();
  envelope.rotation.set(-0.18, -0.22, 0.03);
  scene.add(envelope);

  const W = 3.55;
  const H = 2.15;
  const D = 0.045;
  const creamMat = paperMaterial(CREAM);
  const sageMat = paperMaterial(SAGE);

  const back = new THREE.Mesh(new THREE.PlaneGeometry(W, H), creamMat);
  back.position.z = -D;
  back.receiveShadow = true;
  envelope.add(back);

  const liner = new THREE.Mesh(new THREE.PlaneGeometry(W - 0.1, H - 0.1), sageMat);
  liner.position.z = -D + 0.006;
  envelope.add(liner);

  const front = new THREE.Mesh(new THREE.PlaneGeometry(W, H * 0.52), creamMat);
  front.position.set(0, -H * 0.24, D);
  front.castShadow = true;
  envelope.add(front);

  const letterTex = makeLetterTexture(copy);
  const letter = new THREE.Mesh(
    new THREE.PlaneGeometry(W * 0.78, H * 0.92),
    new THREE.MeshStandardMaterial({
      map: letterTex,
      roughness: 0.92,
      metalness: 0,
    })
  );
  letter.position.set(0, -0.04, 0);
  letter.castShadow = true;
  envelope.add(letter);

  const flapPivot = new THREE.Group();
  flapPivot.position.set(0, H / 2, D);
  envelope.add(flapPivot);

  const flapH = H * 0.7;
  const flapGeo = makeTriangle(W, flapH, -1);
  const flapFront = new THREE.Mesh(flapGeo, paperMaterial(CREAM));
  flapFront.position.z = 0.004;
  flapFront.castShadow = true;
  const flapLiner = new THREE.Mesh(flapGeo, paperMaterial(SAGE));
  flapLiner.position.z = -0.004;
  flapPivot.add(flapFront, flapLiner);

  const sealTex = makeSealTexture();
  const seal = new THREE.Mesh(
    new THREE.CircleGeometry(0.3, 48),
    new THREE.MeshStandardMaterial({
      map: sealTex,
      transparent: true,
      roughness: 0.45,
      metalness: 0.18,
    })
  );
  seal.position.set(0, -flapH * 0.52, 0.02);
  flapPivot.add(seal);

  const CLOSED = -0.1;
  const OPEN = 2.32;
  flapPivot.rotation.x = CLOSED;

  const floor = new THREE.Mesh(
    new THREE.CircleGeometry(3.2, 48),
    new THREE.ShadowMaterial({ opacity: 0.18 })
  );
  floor.rotation.x = -Math.PI / 2;
  floor.position.y = -H / 2 - 0.02;
  envelope.add(floor);

  let lastTime = performance.now();
  let elapsed = 0;
  const pointer = new THREE.Vector2();
  const raycaster = new THREE.Raycaster();
  const clickables = [flapFront, flapLiner, front, letter, seal];

  let opening = false;
  let openingAge = 0;
  let finished = false;
  let raf = 0;
  const duration = 3.8;

  function resize() {
    const w = width();
    const h = height();
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
  }

  function open() {
    if (opening || finished) return;
    opening = true;
    openingAge = 0;
    onOpening?.();
  }

  function tick() {
    const now = performance.now();
    const dt = Math.min((now - lastTime) / 1000, 0.05);
    lastTime = now;
    elapsed += dt;
    const t = elapsed;

    if (!opening) {
      envelope.rotation.y = -0.22 + Math.sin(t * 0.7) * 0.05;
      envelope.position.y = Math.sin(t * 0.9) * 0.04;
    } else {
      openingAge += dt;
      const p = Math.min(openingAge / duration, 1);
      const flapT = easeInOutCubic(Math.min(p / 0.42, 1));
      flapPivot.rotation.x = THREE.MathUtils.lerp(CLOSED, OPEN, flapT);

      const letterT = easeInOutCubic(Math.max(0, Math.min((p - 0.22) / 0.5, 1)));
      letter.position.y = THREE.MathUtils.lerp(-0.04, 1.55, letterT);
      letter.position.z = THREE.MathUtils.lerp(0, 0.62, letterT);
      letter.rotation.x = THREE.MathUtils.lerp(0, -0.08, letterT);

      envelope.position.y = THREE.MathUtils.lerp(0, -0.35, easeInOutCubic(p));
      envelope.rotation.y = THREE.MathUtils.lerp(-0.22, 0, easeInOutCubic(p));
      camera.position.z = THREE.MathUtils.lerp(8.4, 6.6, easeInOutCubic(p));
      seal.material.opacity = 1 - flapT;

      if (p >= 1 && !finished) {
        finished = true;
        onOpened?.();
      }
    }

    renderer.render(scene, camera);
    raf = requestAnimationFrame(tick);
  }

  function onPointerMove(event) {
    const rect = renderer.domElement.getBoundingClientRect();
    pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    raycaster.setFromCamera(pointer, camera);
    const hit = raycaster.intersectObjects(clickables, true).length > 0;
    renderer.domElement.style.cursor = hit || opening ? "pointer" : "default";
  }

  function onClick(event) {
    const rect = renderer.domElement.getBoundingClientRect();
    pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    raycaster.setFromCamera(pointer, camera);
    if (raycaster.intersectObjects(clickables, true).length) open();
  }

  window.addEventListener("resize", resize);
  renderer.domElement.addEventListener("pointermove", onPointerMove);
  renderer.domElement.addEventListener("click", onClick);
  tick();

  return {
    open,
    dispose() {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      renderer.domElement.removeEventListener("pointermove", onPointerMove);
      renderer.domElement.removeEventListener("click", onClick);
      letterTex.dispose();
      sealTex.dispose();
      scene.traverse((obj) => {
        if (obj.geometry) obj.geometry.dispose();
        if (obj.material) {
          const mats = Array.isArray(obj.material) ? obj.material : [obj.material];
          mats.forEach((mat) => mat.dispose());
        }
      });
      renderer.dispose();
      renderer.domElement.remove();
    },
  };
}
