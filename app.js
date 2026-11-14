/* ===================== i18n (sentence case, plain verbs) ===================== */
const I18N = {
  zh: {
    tag: '照片不上传', statusIdle: '等一张照片', pick: '选一张照片',
    introTitle: '把一个人，写进文字里。', introText: '选中人物，生成剪影，再用文字把 TA 盖住。所有计算都在你的浏览器里完成。', introTiny: '拖入、选择或直接粘贴。JPG / PNG。',
    undo: '撤销', change: '换一张', s1: '选人', s2: '轮廓', s3: '文字', s4: '导出',
    s1Title: '选择要遮住的人', s1Sub: '先点选，再精修轮廓。', modelLoading: '模型加载中', modelReady: '本地模型已就绪', modelFail: '模型没加载出来，画笔仍可用',
    dropBig: '把照片拖到这里', dropSmall: '或者选择、粘贴一张', found: '识别到的人', foundNote: '点照片上的编号，或点下面的人。可以选多个。',
    refine: '精修选区', toolSelect: '点选', toolAdd: '画笔', toolSub: '橡皮', brushSize: '笔刷大小', clearMask: '清空选区', snapEdge: '贴合边缘',
    refineNote: '画笔补上漏掉的，橡皮擦掉多出来的，贴合边缘让选区顺着轮廓走。',
    nextStyle: '下一步，做轮廓', s2Title: '轮廓与质感', s2Sub: '决定遮罩的形状和边缘。', photoFilter: '照片', filterColor: '原色', filterBw: '黑白', fillColor: '遮罩颜色', opacity: '不透明度',
    edge: '边缘质感', edgeRough: '撕纸', edgeSpeckle: '颗粒', edgeSmooth: '平滑', rough: '粗糙度', expand: '外扩', reroll: '换一种纹理',
    outline: '描边', outlineDesc: '在遮罩外圈加一条边', outlineWidth: '宽度', outlineColor: '颜色', back: '返回', nextText: '下一步，排版',
    s3Title: '用文字盖住 TA', s3Sub: '拖动文字，调整位置。', layers: '文字图层', addText: '加一段文字', addFill: '用文字填满', content: '内容', font: '字体',
    size: '字号', rotate: '旋转', letterSpacing: '字距', lineHeight: '行距', textColor: '颜色', align: '对齐', alignLeft: '左', alignCenter: '中', alignRight: '右', vertical: '竖排',
    clipLabel: '文字只留在剪影里', clipDesc: '关掉就能写到照片任何地方', centerText: '放回剪影中间', delText: '删除这段', nextSave: '下一步，导出',
    s4Title: '导出', format: '格式', exportReady: '文字已经变成遮罩。', exportNote: '选择格式后导出，照片不会上传。', save: '导出图片', saveNote: '手机上也可以长按预览图保存。',
    kvPrivacy: '隐私', kvPrivacyV: '照片只在你的设备上处理，不上传。', kvModel: '模型', restart: '再做一张',
    footer: '文字是新的遮罩。', stageMeta: '照片不离开浏览器',
    stLoading: '正在加载本地模型，首次约 81MB', stDetecting: '正在定位人物', stFound: (n) => n ? `找到 ${n} 个人，点一下要遮住的那个` : '没框出人，直接在照片上点那个人',
    stSegmenting: '正在生成人物轮廓', stSelected: (n) => `已遮住 ${n} 个人`, stNoModel: 'AI 不可用，用画笔手动涂抹', stPainting: '正在优化边缘', stExporting: '正在渲染高清图',
    layerFree: '文字', layerFill: '填充', newText: '已被文字覆盖。', newFill: 'EXMASK / PRIVATE / ',
    fontTypewriter: '打字机', fontCourier: '打字机，细', fontMarker: '马克笔', fontCaveat: '手写，轻', fontApple: '手写，花体', fontReenie: '手写，随手', fontMaShan: '毛笔楷书', fontZhiMang: '行书', fontLongCang: '龙藏', fontLiuJian: '草书', fontSerif: '衬线', fontSans: '黑体', fontPixel: '像素',
    toastSaved: '已导出', toastDeclined: '取消了保存', toastNoDl: '这里不能直接下载，长按预览图保存', toastNoPerson: '这里没识别到人，换个位置点试试', toastImgFail: '这张图打不开，换一张试试', toastBig: '图比较大，已缩到 1600px 处理',
    hintTap: '点一下要遮住的人', hintBrush: '按住涂抹选区', hintDrag: '拖动文字调整位置', personN: (i) => `第 ${i} 个人`,
    exportSize: (w, h) => `输出 ${w} × ${h}`,
  },
  en: {
    tag: 'photos stay on your device', statusIdle: 'Waiting for a photo', pick: 'Choose a photo',
    introTitle: 'Write someone out of the frame.', introText: 'Select a person, shape the cutout, then cover them with type. Everything stays in your browser.', introTiny: 'Drop, choose, or paste. JPG / PNG.',
    undo: 'Undo', change: 'New photo', s1: 'Select', s2: 'Shape', s3: 'Type', s4: 'Export',
    s1Title: 'Who gets masked?', s1Sub: 'Select first, refine second.', modelLoading: 'Loading model', modelReady: 'Local model ready', modelFail: 'Model failed to load. The brush still works.',
    dropBig: 'Drop a photo here', dropSmall: 'or choose one, or paste', found: 'People found', foundNote: 'Tap a number on the photo or a person below. You can pick several.',
    refine: 'Refine selection', toolSelect: 'Tap', toolAdd: 'Brush', toolSub: 'Eraser', brushSize: 'Brush size', clearMask: 'Clear selection', snapEdge: 'Snap to edges',
    refineNote: 'Brush adds what was missed, eraser removes extra, snap to edges follows the photo’s contours.',
    nextStyle: 'Next, shape it', s2Title: 'Cutout & texture', s2Sub: 'Choose the mask shape and edge.', photoFilter: 'Photo', filterColor: 'Color', filterBw: 'Black and white', fillColor: 'Mask color', opacity: 'Opacity',
    edge: 'Edge texture', edgeRough: 'Torn', edgeSpeckle: 'Grain', edgeSmooth: 'Smooth', rough: 'Roughness', expand: 'Expand', reroll: 'Reroll texture',
    outline: 'Outline', outlineDesc: 'A border around the mask', outlineWidth: 'Width', outlineColor: 'Color', back: 'Back', nextText: 'Next, set type',
    s3Title: 'Cover them in words', s3Sub: 'Drag the text to move it.', layers: 'Text layers', addText: 'Add a line', addFill: 'Fill with text', content: 'Text', font: 'Font',
    size: 'Size', rotate: 'Rotate', letterSpacing: 'Spacing', lineHeight: 'Line height', textColor: 'Color', align: 'Align', alignLeft: 'Left', alignCenter: 'Center', alignRight: 'Right', vertical: 'Vertical',
    clipLabel: 'Keep text inside the cutout', clipDesc: 'Off lets you write anywhere on the photo', centerText: 'Center on the cutout', delText: 'Delete this text', nextSave: 'Next, export',
    s4Title: 'Export', format: 'Format', exportReady: 'The type is the mask.', exportNote: 'Pick a format and export. Nothing leaves your browser.', save: 'Export image', saveNote: 'On a phone you can also long-press the preview to save it.',
    kvPrivacy: 'Privacy', kvPrivacyV: 'Processed on your device only. Nothing is uploaded.', kvModel: 'Models', restart: 'Make another',
    footer: 'Text is the new mask.', stageMeta: 'Your photo never leaves the browser',
    stLoading: 'Loading local models, about 81MB the first time', stDetecting: 'Finding people', stFound: (n) => n ? `Found ${n} ${n === 1 ? 'person' : 'people'}. Tap the one to mask.` : 'No one boxed. Tap the person on the photo.',
    stSegmenting: 'Tracing the cutout', stSelected: (n) => `${n} masked`, stNoModel: 'AI unavailable. Paint the mask by hand.', stPainting: 'Refining edges', stExporting: 'Rendering full size',
    layerFree: 'text', layerFill: 'fill', newText: 'Covered in type.', newFill: 'EXMASK / PRIVATE / ',
    fontTypewriter: 'Typewriter', fontCourier: 'Typewriter, light', fontMarker: 'Marker', fontCaveat: 'Handwritten', fontApple: 'Script', fontReenie: 'Scribble', fontMaShan: 'Brush (CN)', fontZhiMang: 'Running (CN)', fontLongCang: 'Long Cang (CN)', fontLiuJian: 'Cursive (CN)', fontSerif: 'Serif', fontSans: 'Sans', fontPixel: 'Pixel',
    toastSaved: 'Exported', toastDeclined: 'Save cancelled', toastNoDl: 'Direct download is not available here. Long-press the preview to save.', toastNoPerson: 'No person found there. Try tapping elsewhere.', toastImgFail: 'Could not open that image. Try another.', toastBig: 'Large photo scaled to 1600px for editing',
    hintTap: 'Tap the person to mask', hintBrush: 'Hold to paint the mask', hintDrag: 'Drag the text to move it', personN: (i) => `Person ${i}`,
    exportSize: (w, h) => `Output ${w} × ${h}`,
  }
};
/* ===================== core: engine, image, mask, render ===================== */
let LANG = 'zh';
const t = (k, ...a) => { const v = (I18N[LANG][k] ?? I18N.zh[k] ?? k); return typeof v === 'function' ? v(...a) : v; };

/* ---------- fonts ---------- */
const FONTS = [
  { id: 'typewriter', name: 'fontTypewriter', family: 'Special Elite', gf: 'Special+Elite', fallback: '"American Typewriter","Courier New",monospace', sample: 'Aa' },
  { id: 'courier', name: 'fontCourier', family: 'Courier Prime', gf: 'Courier+Prime', fallback: '"Courier New",monospace', sample: 'Aa' },
  { id: 'marker', name: 'fontMarker', family: 'Permanent Marker', gf: 'Permanent+Marker', fallback: 'cursive', sample: 'Aa' },
  { id: 'caveat', name: 'fontCaveat', family: 'Caveat', gf: 'Caveat:wght@500', fallback: 'cursive', sample: 'Aa' },
  { id: 'apple', name: 'fontApple', family: 'Homemade Apple', gf: 'Homemade+Apple', fallback: 'cursive', sample: 'Aa' },
  { id: 'reenie', name: 'fontReenie', family: 'Reenie Beanie', gf: 'Reenie+Beanie', fallback: 'cursive', sample: 'Aa' },
  { id: 'mashan', name: 'fontMaShan', family: 'Ma Shan Zheng', gf: 'Ma+Shan+Zheng', fallback: '"KaiTi","STKaiti",serif', sample: '再见', cjk: true },
  { id: 'zhimang', name: 'fontZhiMang', family: 'Zhi Mang Xing', gf: 'Zhi+Mang+Xing', fallback: '"KaiTi","STKaiti",serif', sample: '再见', cjk: true },
  { id: 'longcang', name: 'fontLongCang', family: 'Long Cang', gf: 'Long+Cang', fallback: '"KaiTi","STKaiti",serif', sample: '再见', cjk: true },
  { id: 'liujian', name: 'fontLiuJian', family: 'Liu Jian Mao Cao', gf: 'Liu+Jian+Mao+Cao', fallback: '"KaiTi","STKaiti",serif', sample: '再见', cjk: true },
  { id: 'serif', name: 'fontSerif', family: 'Playfair Display', gf: 'Playfair+Display', fallback: '"Noto Serif SC","Songti SC","SimSun",serif', sample: 'Aa', cjkAux: 'Noto+Serif+SC' },
  { id: 'sans', name: 'fontSans', family: '', gf: '', fallback: '-apple-system,"PingFang SC","Helvetica Neue","Microsoft YaHei",sans-serif', sample: 'Aa' },
  { id: 'pixel', name: 'fontPixel', family: 'VT323', gf: 'VT323', fallback: 'monospace', sample: 'Aa' },
];
const fontLinks = new Map(); // key -> {el, chars:Set}
function fontCss(f) { return (f.family ? `"${f.family}", ` : '') + f.fallback; }
// Ensure a font (and, for CJK faces, the glyphs for `text`) is requested from Google Fonts. Returns a promise that resolves when loaded (or fails silently).
async function ensureFont(f, text) {
  if (!f.gf) return;
  const reqs = [];
  const needChars = (fam, key) => {
    const chars = new Set((text || '').split('').filter(ch => ch.charCodeAt(0) > 127 || !/\s/.test(ch)));
    let rec = fontLinks.get(key);
    if (!rec) { rec = { el: null, chars: new Set() }; fontLinks.set(key, rec); }
    let grew = false; for (const ch of chars) if (!rec.chars.has(ch)) { rec.chars.add(ch); grew = true; }
    if (rec.el && !grew) return;
    const all = Array.from(rec.chars).join('');
    const url = `https://fonts.googleapis.com/css2?family=${fam}&text=${encodeURIComponent(all + 'Aa再见')}&display=swap`;
    const el = document.createElement('link'); el.rel = 'stylesheet'; el.href = url;
    reqs.push(new Promise(res => { el.onload = res; el.onerror = res; setTimeout(res, 6000); }));
    document.head.appendChild(el); if (rec.el) rec.el.remove(); rec.el = el;
  };
  if (f.cjk) needChars(f.gf, f.id);
  else {
    if (!fontLinks.has(f.id)) {
      const el = document.createElement('link'); el.rel = 'stylesheet'; el.href = `https://fonts.googleapis.com/css2?family=${f.gf}&display=swap`;
      reqs.push(new Promise(res => { el.onload = res; el.onerror = res; setTimeout(res, 6000); }));
      document.head.appendChild(el); fontLinks.set(f.id, { el, chars: new Set() });
    }
    if (f.cjkAux && /[　-鿿＀-￯]/.test(text || '')) needChars(f.cjkAux, f.id + ':cjk');
  }
  await Promise.all(reqs);
  try { await document.fonts.load(`32px "${f.family}"`, text || 'Aa'); } catch (e) {}
  if (f.cjkAux) { try { await document.fonts.load(`32px "${f.cjkAux.replace(/\+/g, ' ')}"`, text || '再见'); } catch (e) {} }
}

/* ---------- engine (YOLO11n-seg + MobileSAM, ONNX Runtime WebGPU) ---------- */
const YOLO_INPUT = 640, SAM_INPUT = 1024;
const SAM_MEAN = [123.675, 116.28, 103.53], SAM_STD = [58.395, 57.12, 57.375];
const Engine = {
  ready: false, failed: false, loading: null,
  yolo: null, enc: null, dec: null, emb: null, embFor: null,
  warmYolo: null, warmSam: null,
  queue: Promise.resolve(),
  timings: {},
  async init(onProgress) {
    if (this.loading) return this.loading;
    this.loading = (async () => {
      try {
        onProgress && onProgress(0.05);
        if (!navigator.gpu) throw new Error('当前浏览器不支持 WebGPU');
        const adapter = await navigator.gpu.requestAdapter({ powerPreference: 'high-performance' });
        if (!adapter) throw new Error('没有可用的 WebGPU 显卡');
        ort.env.wasm.wasmPaths = new URL('./ort/', location.href).href;
        ort.env.wasm.numThreads = Math.min(4, navigator.hardwareConcurrency || 4);
        const load = async (p) => {
          const buf = await (await fetch(p)).arrayBuffer();
          return ort.InferenceSession.create(buf, { executionProviders: ['webgpu'], graphOptimizationLevel: 'all' });
        };
        const base = './models/';
        this.yolo = await load(base + 'yolo11n-seg.onnx');
        onProgress && onProgress(0.4);
        this.enc = await load(base + 'encoder.onnx');
        onProgress && onProgress(0.8);
        this.dec = await load(base + 'decoder.onnx');
        if (!new URLSearchParams(location.search).has('nowarm')) {
          await this.warmYoloOnly();
          onProgress && onProgress(0.92);
          await this.warmSamOnly();
        }
        onProgress && onProgress(1);
        this.ready = true;
      } catch (e) { console.error('engine init failed', e); this.failed = true; throw e; }
    })();
    return this.loading;
  },
  warmYoloOnly() {
    if (!this.warmYolo) {
      this.warmYolo = (async () => {
        try {
          await this.run(this.yolo, { images: new ort.Tensor('float32', new Float32Array(3 * YOLO_INPUT * YOLO_INPUT), [1, 3, YOLO_INPUT, YOLO_INPUT]) });
        } catch (e) { console.warn('yolo warmup failed', e); }
      })();
    }
    return this.warmYolo;
  },
  warmSamOnly() {
    if (!this.warmSam) this.warmSam = (async () => {
      try {
        const zeros = new ort.Tensor('float32', new Float32Array(3 * SAM_INPUT * SAM_INPUT), [1, 3, SAM_INPUT, SAM_INPUT]);
        const out = await this.run(this.enc, { image: zeros });
        const emb = out[Object.keys(out)[0]];
        await this.run(this.dec, {
          image_embeddings: emb,
          point_coords: new ort.Tensor('float32', new Float32Array([100, 100, 500, 500]), [1, 2, 2]),
          point_labels: new ort.Tensor('float32', new Float32Array([2, 3]), [1, 2]),
          mask_input: new ort.Tensor('float32', new Float32Array(256 * 256), [1, 1, 256, 256]),
          has_mask_input: new ort.Tensor('float32', new Float32Array([0]), [1]),
          orig_im_size: new ort.Tensor('float32', new Float32Array([640, 640]), [2]),
        });
      } catch (e) { console.warn('sam warmup failed', e); }
    })();
    return this.warmSam;
  },
  run(session, feeds) {
    const task = this.queue.then(() => session.run(feeds));
    this.queue = task.then(() => {}, () => {});
    return task;
  },
  letterbox(src) {
    const w = src.width, h = src.height;
    const s = Math.min(YOLO_INPUT / w, YOLO_INPUT / h);
    const nw = Math.round(w * s), nh = Math.round(h * s);
    const ox = Math.floor((YOLO_INPUT - nw) / 2), oy = Math.floor((YOLO_INPUT - nh) / 2);
    const c = document.createElement('canvas');
    c.width = YOLO_INPUT; c.height = YOLO_INPUT;
    const g = c.getContext('2d');
    g.fillStyle = 'rgb(114,114,114)';
    g.fillRect(0, 0, YOLO_INPUT, YOLO_INPUT);
    g.drawImage(src, 0, 0, w, h, ox, oy, nw, nh);
    const d = g.getImageData(0, 0, YOLO_INPUT, YOLO_INPUT).data;
    const out = new Float32Array(3 * YOLO_INPUT * YOLO_INPUT);
    const n = YOLO_INPUT * YOLO_INPUT;
    for (let i = 0, p = 0; i < n; i++, p += 4) {
      out[i] = d[p] / 255;
      out[i + n] = d[p + 1] / 255;
      out[i + 2 * n] = d[p + 2] / 255;
    }
    return { data: out, scale: s, ox, oy };
  },
  boxIoU(a, b) {
    const x1 = Math.max(a[0], b[0]), y1 = Math.max(a[1], b[1]);
    const x2 = Math.min(a[2], b[2]), y2 = Math.min(a[3], b[3]);
    const inter = Math.max(0, x2 - x1) * Math.max(0, y2 - y1);
    const ua = (a[2] - a[0]) * (a[3] - a[1]) + (b[2] - b[0]) * (b[3] - b[1]) - inter;
    return inter / Math.max(1e-6, ua);
  },
  async detectPeople(canvas) {
    const t0 = performance.now();
    if (this.warmYolo) await this.warmYolo;
    const { data, scale, ox, oy } = this.letterbox(canvas);
    const out = await this.run(this.yolo, { images: new ort.Tensor('float32', data, [1, 3, YOLO_INPUT, YOLO_INPUT]) });
    const o = out[Object.keys(out)[0]];
    const [, C, N] = o.dims;
    const d = o.data;
    const boxes = [];
    for (let i = 0; i < N; i++) {
      const score = d[4 * N + i];
      if (score < 0.35) continue;
      const cx = d[i], cy = d[N + i], w = d[2 * N + i], h = d[3 * N + i];
      if (w * h < 0.004 * YOLO_INPUT * YOLO_INPUT) continue;
      boxes.push([(cx - w / 2 - ox) / scale, (cy - h / 2 - oy) / scale, (cx + w / 2 - ox) / scale, (cy + h / 2 - oy) / scale, score]);
    }
    boxes.sort((a, b) => b[4] - a[4]);
    const keep = [];
    for (const b of boxes) {
      if (keep.every((k) => this.boxIoU(k, b) < 0.45)) keep.push(b);
      if (keep.length >= 20) break;
    }
    const people = keep.map((b) => ({ x: b[0], y: b[1], w: b[2] - b[0], h: b[3] - b[1], score: b[4] }));
    people.sort((a, b) => b.w * b.h - a.w * a.h);
    this.timings.detectMs = performance.now() - t0;
    return people.slice(0, 12);
  },
  async embed(canvas) {
    if (this.embFor === canvas && this.emb) return this.emb;
    if (this.warmSam) await this.warmSam;
    const t0 = performance.now();
    const w = canvas.width, h = canvas.height;
    const s = SAM_INPUT / Math.max(w, h);
    const nw = Math.round(w * s), nh = Math.round(h * s);
    const c = document.createElement('canvas');
    c.width = nw; c.height = nh;
    const g = c.getContext('2d');
    g.drawImage(canvas, 0, 0, nw, nh);
    const d = g.getImageData(0, 0, nw, nh).data;
    const n = SAM_INPUT * SAM_INPUT;
    const out = new Float32Array(3 * n);
    for (let y = 0; y < SAM_INPUT; y++) {
      for (let x = 0; x < SAM_INPUT; x++) {
        const i = y * SAM_INPUT + x;
        if (x < nw && y < nh) {
          const p = (y * nw + x) * 4;
          out[i] = (d[p] - SAM_MEAN[0]) / SAM_STD[0];
          out[i + n] = (d[p + 1] - SAM_MEAN[1]) / SAM_STD[1];
          out[i + 2 * n] = (d[p + 2] - SAM_MEAN[2]) / SAM_STD[2];
        }
      }
    }
    const res = await this.run(this.enc, { image: new ort.Tensor('float32', out, [1, 3, SAM_INPUT, SAM_INPUT]) });
    this.emb = res[Object.keys(res)[0]];
    this.embFor = canvas;
    this.timings.encodeMs = performance.now() - t0;
    return this.emb;
  },
  async decode(canvas, coords, labels) {
    const t0 = performance.now();
    const W = canvas.width, H = canvas.height;
    const emb = await this.embed(canvas);
    const feed = {
      image_embeddings: emb,
      point_coords: new ort.Tensor('float32', new Float32Array(coords), [1, labels.length, 2]),
      point_labels: new ort.Tensor('float32', new Float32Array(labels), [1, labels.length]),
      mask_input: new ort.Tensor('float32', new Float32Array(256 * 256), [1, 1, 256, 256]),
      has_mask_input: new ort.Tensor('float32', new Float32Array([0]), [1]),
      orig_im_size: new ort.Tensor('float32', new Float32Array([H, W]), [2]),
    };
    const out = await this.run(this.dec, feed);
    const t = out[Object.keys(out)[0]];
    const [, C, mh, mw] = t.dims;
    const ch = 0;
    const off = ch * mh * mw;
    const m = new Float32Array(W * H);
    for (let y = 0; y < H; y++) {
      const sy = Math.min(mh - 1, Math.round(y * mh / H));
      for (let x = 0; x < W; x++) {
        const sx = Math.min(mw - 1, Math.round(x * mw / W));
        m[y * W + x] = t.data[off + sy * mw + sx] > 0 ? 1 : 0;
      }
    }
    this.timings.decodeMs = performance.now() - t0;
    return m;
  },
  // Segment by point (used when the user taps a spot with no detected box).
  async segmentAt(canvas, px, py, crop) {
    const W = canvas.width, H = canvas.height;
    let src = canvas, ox = 0, oy = 0;
    if (crop) {
      src = document.createElement('canvas'); src.width = crop.w; src.height = crop.h;
      src.getContext('2d').drawImage(canvas, crop.x, crop.y, crop.w, crop.h, 0, 0, crop.w, crop.h);
      ox = crop.x; oy = crop.y;
    }
    const W2 = src.width, H2 = src.height;
    const s = SAM_INPUT / Math.max(W2, H2);
    const m = await this.decode(src, [(px - ox) * s, (py - oy) * s], [1]);
    if (!crop) return m;
    const full = new Float32Array(W * H);
    for (let y = 0; y < H2; y++) full.set(m.subarray(y * W2, (y + 1) * W2), (oy + y) * W + ox);
    return full;
  },
  // Segment by the detected person box.
  async segmentPerson(canvas, px, py, box) {
    if (!box) return this.segmentAt(canvas, px, py, null);
    const s = SAM_INPUT / Math.max(canvas.width, canvas.height);
    return this.decode(canvas, [box.x * s, box.y * s, (box.x + box.w) * s, (box.y + box.h) * s], [2, 3]);
  },
  maskArea(m, thr = 0.5) { let n = 0; for (let i = 0; i < m.length; i += 4) if (m[i] > thr) n++; return n * 4; },
};

/* ---------- image math ---------- */
function boxBlur(src, w, h, r) {
  if (r <= 0) return Float32Array.from(src);
  const tmp = new Float32Array(w * h), out = new Float32Array(w * h), k = 1 / (2 * r + 1);
  for (let y = 0; y < h; y++) {
    const row = y * w; let s = 0;
    for (let x = -r; x <= r; x++) s += src[row + Math.min(w - 1, Math.max(0, x))];
    for (let x = 0; x < w; x++) { tmp[row + x] = s * k; s += src[row + Math.min(w - 1, x + r + 1)] - src[row + Math.max(0, x - r)]; }
  }
  for (let x = 0; x < w; x++) {
    let s = 0;
    for (let y = -r; y <= r; y++) s += tmp[Math.min(h - 1, Math.max(0, y)) * w + x];
    for (let y = 0; y < h; y++) { out[y * w + x] = s * k; s += tmp[Math.min(h - 1, y + r + 1) * w + x] - tmp[Math.max(0, y - r) * w + x]; }
  }
  return out;
}
function guidedFilter(I, p, w, h, r, eps) {
  const n = w * h, meanI = boxBlur(I, w, h, r), meanP = boxBlur(p, w, h, r);
  const II = new Float32Array(n), IP = new Float32Array(n);
  for (let i = 0; i < n; i++) { II[i] = I[i] * I[i]; IP[i] = I[i] * p[i]; }
  const corrI = boxBlur(II, w, h, r), corrIP = boxBlur(IP, w, h, r), a = new Float32Array(n), b = new Float32Array(n);
  for (let i = 0; i < n; i++) { const v = corrI[i] - meanI[i] * meanI[i]; a[i] = (corrIP[i] - meanI[i] * meanP[i]) / (v + eps); b[i] = meanP[i] - a[i] * meanI[i]; }
  const ma = boxBlur(a, w, h, r), mb = boxBlur(b, w, h, r), q = new Float32Array(n);
  for (let i = 0; i < n; i++) q[i] = Math.min(1, Math.max(0, ma[i] * I[i] + mb[i]));
  return q;
}
// Smooth value noise in [0,1], w*h, from a seeded coarse grid upsampled by the canvas.
function makeNoise(w, h, cells, seed) {
  let s = seed >>> 0 || 1; const rnd = () => (s = (s * 1664525 + 1013904223) >>> 0) / 4294967296;
  const cw = Math.max(2, Math.round(cells)), chh = Math.max(2, Math.round(cells * h / w));
  const c = document.createElement('canvas'); c.width = cw; c.height = chh;
  const ctx = c.getContext('2d'); const id = ctx.createImageData(cw, chh);
  for (let i = 0; i < cw * chh; i++) { const v = Math.round(rnd() * 255); id.data[i * 4] = v; id.data[i * 4 + 1] = v; id.data[i * 4 + 2] = v; id.data[i * 4 + 3] = 255; }
  ctx.putImageData(id, 0, 0);
  const big = document.createElement('canvas'); big.width = w; big.height = h;
  const bctx = big.getContext('2d', { willReadFrequently: true }); bctx.imageSmoothingEnabled = true; bctx.imageSmoothingQuality = 'high';
  bctx.drawImage(c, 0, 0, w, h);
  const d = bctx.getImageData(0, 0, w, h).data, out = new Float32Array(w * h);
  for (let i = 0; i < w * h; i++) out[i] = d[i * 4] / 255;
  return out;
}
function hexToRgb(hex) { const v = parseInt(hex.slice(1), 16); return [(v >> 16) & 255, (v >> 8) & 255, v & 255]; }
function alphaToCanvas(alpha, w, h, rgb, mul = 1) {
  const c = document.createElement('canvas'); c.width = w; c.height = h;
  const ctx = c.getContext('2d'); const id = ctx.createImageData(w, h); const d = id.data;
  for (let i = 0, p = 0; i < w * h; i++, p += 4) { d[p] = rgb[0]; d[p + 1] = rgb[1]; d[p + 2] = rgb[2]; d[p + 3] = Math.round(Math.min(1, Math.max(0, alpha[i] * mul)) * 255); }
  ctx.putImageData(id, 0, 0); return c;
}

/* ---------- silhouette: from a hard-ish mask alpha (0..1) to styled fill + outline alphas ---------- */
// params: {edge:'rough'|'speckle'|'smooth', rough:0..1, expand:px (at this scale), outline:px, seed, minDim}
function styleMask(alpha, w, h, P) {
  const minDim = Math.min(w, h);
  let m = alpha;
  // expand / shrink via blur + threshold
  if (P.expand !== 0) {
    const r = Math.max(1, Math.round(Math.abs(P.expand)));
    const b = boxBlur(m, w, h, r);
    const out = new Float32Array(w * h);
    const thr = P.expand > 0 ? 0.04 : 0.96;
    for (let i = 0; i < out.length; i++) out[i] = b[i] > thr ? 1 : 0;
    m = out;
  }
  // soften edge band
  const rs = Math.max(1, Math.round(minDim * (P.edge === 'smooth' ? 0.002 : 0.009 + 0.012 * P.rough)));
  let b = boxBlur(m, w, h, rs); b = boxBlur(b, w, h, rs);
  const fill = new Float32Array(w * h);
  if (P.edge === 'smooth') {
    for (let i = 0; i < fill.length; i++) { const v = (b[i] - 0.5) / 0.12 + 0.5; fill[i] = v <= 0 ? 0 : v >= 1 ? 1 : v; }
  } else {
    const n1 = makeNoise(w, h, 14 + 10 * (1 - P.rough), P.seed), n2 = makeNoise(w, h, 60, P.seed + 7);
    const amp = 0.25 + 0.55 * P.rough;
    let sp = P.seed * 2654435761 >>> 0; const rnd = () => (sp = (sp * 1664525 + 1013904223) >>> 0) / 4294967296;
    const speck = P.edge === 'speckle';
    for (let i = 0; i < fill.length; i++) {
      const bv = b[i]; if (bv <= 0.001) { fill[i] = 0; continue; } if (bv >= 0.999) { fill[i] = 1; continue; }
      let v = bv + amp * ((n1[i] - 0.5) * 0.7 + (n2[i] - 0.5) * 0.3);
      if (speck) v += (rnd() - 0.5) * 0.9 * P.rough;
      const aa = (v - 0.5) / 0.05 + 0.5; fill[i] = aa <= 0 ? 0 : aa >= 1 ? 1 : aa;
    }
  }
  let outline = null;
  if (P.outline > 0) {
    const r = Math.max(1, Math.round(P.outline));
    const ob = boxBlur(fill, w, h, r);
    outline = new Float32Array(w * h);
    for (let i = 0; i < outline.length; i++) { const v = ob[i] * (2 * r + 1) * 0.9; outline[i] = v >= 1 ? 1 : v; }
  }
  return { fill, outline };
}

/* ---------- text layout ---------- */
// Measure/draw a text layer onto ctx (already scaled so that 1 unit = 1 px at the target resolution).
// layer: {text, fontId, size (fraction of minDim), color, align, rot, ls, lh, x, y (fractions), mode:'free'|'fill', vertical}
function layerFont(layer, px) { const f = FONTS.find(f => f.id === layer.fontId) || FONTS[0]; return `${px}px ${fontCss(f)}`; }
function wrapLines(ctx, text, maxW) {
  const out = [];
  for (const raw of (text || '').split('\n')) {
    if (!maxW || ctx.measureText(raw).width <= maxW) { out.push(raw); continue; }
    const cjk = /[\u3000-\u9fff]/.test(raw);
    const units = cjk ? raw.split('') : raw.split(/(\s+)/).filter(u => u.length);
    let line = '';
    for (const u of units) {
      const cand = line + u;
      if (ctx.measureText(cand).width > maxW && line.trim()) { out.push(line.trimEnd()); line = u.trim() ? u : ''; }
      else line = cand;
    }
    if (line.trim()) out.push(line.trimEnd());
  }
  return out.length ? out : [''];
}
function drawTextLayer(ctx, layer, W, H, measureOnly, maxW) {
  const minDim = Math.min(W, H); const px = Math.max(4, layer.size / 100 * minDim);
  ctx.save();
  ctx.font = layerFont(layer, px); ctx.fillStyle = layer.color; ctx.textBaseline = 'alphabetic';
  if ('letterSpacing' in ctx) ctx.letterSpacing = `${(layer.ls || 0) * px * 0.01}px`;
  const lh = (layer.lh || 1.3) * px;
  let lines = layer.vertical ? (layer.text || '').split('\n') : wrapLines(ctx, layer.text, maxW);
  if (layer.vertical) { lines = lines.map(l => l.split('')); }
  const cx = layer.x * W, cy = layer.y * H;
  ctx.translate(cx, cy); ctx.rotate((layer.rot || 0) * Math.PI / 180);
  let bbox;
  if (!layer.vertical) {
    const widths = lines.map(l => ctx.measureText(l).width); const bw = Math.max(1, ...widths), bh = lines.length * lh;
    ctx.textAlign = layer.align || 'center';
    const ax = layer.align === 'left' ? -bw / 2 : layer.align === 'right' ? bw / 2 : 0;
    if (!measureOnly) lines.forEach((l, i) => ctx.fillText(l, ax, -bh / 2 + (i + 0.8) * lh));
    bbox = { w: bw, h: bh };
  } else {
    // vertical: each line is a column, right-to-left
    const colW = px * 1.15; const n = lines.length; const maxLen = Math.max(1, ...lines.map(l => l.length));
    const bw = n * colW, bh = maxLen * px * (layer.lh || 1.3);
    ctx.textAlign = 'center';
    if (!measureOnly) lines.forEach((chars, ci) => { const x = bw / 2 - (ci + 0.5) * colW; chars.forEach((ch, ri) => ctx.fillText(ch, x, -bh / 2 + (ri + 0.85) * px * (layer.lh || 1.3))); });
    bbox = { w: bw, h: bh };
  }
  ctx.restore();
  // corners of bbox in canvas space (for hit testing)
  const r = (layer.rot || 0) * Math.PI / 180, c = Math.cos(r), s = Math.sin(r);
  const pts = [[-bbox.w / 2, -bbox.h / 2], [bbox.w / 2, -bbox.h / 2], [bbox.w / 2, bbox.h / 2], [-bbox.w / 2, bbox.h / 2]].map(([x, y]) => [cx + x * c - y * s, cy + x * s + y * c]);
  return { cx, cy, w: bbox.w, h: bbox.h, pts };
}
// Fill mode: repeat the text as running lines across the mask bbox; caller clips with the mask.
function drawFillText(ctx, layer, W, H, bbox) {
  const minDim = Math.min(W, H); const px = Math.max(4, layer.size / 100 * minDim);
  ctx.save(); ctx.font = layerFont(layer, px); ctx.fillStyle = layer.color; ctx.textBaseline = 'alphabetic'; ctx.textAlign = 'left';
  if ('letterSpacing' in ctx) ctx.letterSpacing = `${(layer.ls || 0) * px * 0.01}px`;
  const lh = (layer.lh || 1.3) * px;
  const base = (layer.text || '').replace(/\s*\n\s*/g, ' ').trim() || ' ';
  const x0 = bbox.x - px, x1 = bbox.x + bbox.w + px, width = x1 - x0;
  const cjk = /[　-鿿]/.test(base);
  // build words
  const unit = cjk ? base.split('') : base.split(' ').filter(Boolean);
  let y = bbox.y + lh * 0.9, ui = 0;
  const sep = cjk ? '' : ' ';
  let guard = 0;
  while (y < bbox.y + bbox.h + lh && guard++ < 400) {
    let line = '', lw = 0;
    while (true) {
      const wrd = unit[ui % unit.length]; const cand = line ? line + sep + wrd : wrd;
      const cw = ctx.measureText(cand).width;
      if (cw > width && line) break;
      line = cand; lw = cw; ui++;
      if (ui % unit.length === 0 && !cjk) { line += ' '; }
      if (lw > width) break;
    }
    ctx.fillText(line, x0 + (layer.align === 'center' ? (width - lw) / 2 : layer.align === 'right' ? width - lw : 0), y);
    y += lh;
  }
  ctx.restore();
}
/* ===================== app state & UI ===================== */
const $ = (id) => document.getElementById(id);
const S = {
  img: null, fullW: 0, fullH: 0, work: null, W: 0, H: 0, lum: null,
  people: [], // {box, mask?, selected}
  mask: null, maskVer: 0, undo: [],
  tool: 'select', brush: 40, step: 1,
  style: { filter: 'none', color: '#FFFFFF', opacity: 1, edge: 'rough', rough: 0.5, expand: 6, outline: false, outlineColor: '#FFFFFF', outlineWidth: 8, seed: 12345 },
  layers: [], active: null, layerSeq: 0,
  fmt: 'jpg', busy: false,
};
const FILL_SWATCHES = ['#FFFFFF', '#F6F1E7', '#111111', '#FF5AA5', '#F2C0D2', '#FFD23F', '#2E6BFF', '#8FD3B8', '#C9B8FF'];
const TEXT_SWATCHES = ['#111111', '#FFFFFF', '#EE2A78', '#2E6BFF', '#1E8E5A', '#D7262D', '#F2C230', '#7A5CFF'];

/* ---------- helpers ---------- */
async function saveStandalone(blob, filename) {
  // Phones get the native share sheet when possible; desktop downloads directly.
  try {
    const file = new File([blob], filename, { type: blob.type });
    if (/iPhone|iPad|Android/i.test(navigator.userAgent) && navigator.canShare && navigator.canShare({ files: [file] })) {
      try { await navigator.share({ files: [file] }); toast(t('toastSaved')); return; }
      catch (e) { if (e && e.name === 'AbortError') { toast(t('toastDeclined')); return; } }
    }
  } catch (e) {}
  const url = URL.createObjectURL(blob); const a = document.createElement('a'); a.href = url; a.download = filename; document.body.appendChild(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 60000); toast(t('toastSaved'));
}
function syncRange(el) { const min = +el.min || 0, max = +el.max || 100; const pct = ((+el.value - min) / (max - min)) * 100; el.style.setProperty('--pct', pct.toFixed(2) + '%'); }
function toast(msg, ms = 2200) { const el = $('toast'); el.textContent = msg; el.classList.add('show'); clearTimeout(el._t); el._t = setTimeout(() => el.classList.remove('show'), ms); }
function setStatus(text, mode) { $('statusText').textContent = text; const st = $('status'); st.className = 'status' + (mode ? ' ' + mode : ''); st.hidden = !S.img; }
function hint(text) { const h = $('hint'); if (!text) { h.hidden = true; return; } h.textContent = text; h.hidden = false; }
function applyLang() {
  document.querySelectorAll('[data-i18n]').forEach(el => { const v = I18N[LANG][el.dataset.i18n]; if (typeof v === 'string') el.textContent = v; });
  $('langZh').setAttribute('aria-pressed', LANG === 'zh'); $('langEn').setAttribute('aria-pressed', LANG === 'en');
  document.documentElement.lang = LANG === 'zh' ? 'zh-CN' : 'en';
  buildFontGrid(); renderLayerList(); renderPeopleList(); if (activeLayer()) syncEditor();
  if (!S.img) setStatus(t('statusIdle'));
  else if (Engine.failed) setStatus(t('stNoModel'));
  else if (S.detecting) setStatus(t('stDetecting'), 'busy');
  else if (S.busy) setStatus(t('stPainting'), 'busy');
  else if (maskHasContent()) setStatus(t('stSelected', selectedCount() || 1), 'ok');
  else setStatus(t('stFound', S.people.length), S.people.length ? 'ok' : '');
  updateHint();
}
function setLang(l) { LANG = l; try { localStorage.setItem('exmask.lang', l); } catch (e) {} applyLang(); }

/* ---------- image loading ---------- */
async function loadImageFile(file) {
  if (!file || !file.type.startsWith('image/')) { toast(t('toastImgFail')); return; }
  const url = URL.createObjectURL(file);
  const img = new Image();
  try { img.src = url; await img.decode(); } catch (e) { toast(t('toastImgFail')); URL.revokeObjectURL(url); return; }
  const fw = img.naturalWidth, fh = img.naturalHeight; if (!fw || !fh) { toast(t('toastImgFail')); return; }
  resetForNewImage();
  S.img = img; S.fullW = fw; S.fullH = fh;
  const MAXW = 1600; const sc = Math.min(1, MAXW / Math.max(fw, fh));
  S.W = Math.max(1, Math.round(fw * sc)); S.H = Math.max(1, Math.round(fh * sc));
  const c = document.createElement('canvas'); c.width = S.W; c.height = S.H;
  const ctx = c.getContext('2d', { willReadFrequently: true }); ctx.imageSmoothingQuality = 'high'; ctx.drawImage(img, 0, 0, S.W, S.H);
  S.work = c; S.mask = new Float32Array(S.W * S.H); S.maskVer++;
  const d = ctx.getImageData(0, 0, S.W, S.H).data; S.lum = new Float32Array(S.W * S.H);
  for (let i = 0, p = 0; i < S.lum.length; i++, p += 4) S.lum[i] = (0.299 * d[p] + 0.587 * d[p + 1] + 0.114 * d[p + 2]) / 255;
  if (sc < 1) toast(t('toastBig'));
  const pv = $('preview'); pv.width = S.W; pv.height = S.H;
  $('intro').hidden = true; $('frame').hidden = false; $('panel').hidden = false; $('peopleWrap').hidden = false; $('stageWrap').classList.add('pinned');
  $('changeBtn').hidden = false; $('undoBtn').hidden = false;
  { const lowMem = (navigator.deviceMemory && navigator.deviceMemory <= 4) || /iPhone|iPad|Android/i.test(navigator.userAgent); const cap = lowMem ? 2400 : 3200; const esc = Math.min(1, cap / Math.max(fw, fh)); $('exportSize').textContent = t('exportSize', Math.round(fw * esc), Math.round(fh * esc)); }
  goStep(1); setTool('select'); renderPreview();
  await detectPeople();
}
function resetForNewImage() {
  S.people = []; S.mask = null; S.undo = []; S.layers = []; S.active = null; styleCache.key = null; photoCache.key = null;
  renderLayerList(); renderPeopleList(); renderMarkers();
  $('next1').disabled = true; [2, 3, 4].forEach(n => $('tab' + n).disabled = true);
  document.querySelectorAll('.steps button').forEach(b => b.classList.remove('done'));
}
async function detectPeople() {
  if (!S.work || S.detecting) return; S.detecting = true;
  if (!Engine.ready) {
    setStatus(t('stLoading'), 'busy');
    try { await Engine.init(); } catch (e) { setStatus(t('stNoModel')); setTool('add'); S.detecting = false; return; }
    if (!S.work) { S.detecting = false; return; }
  }
  setStatus(t('stDetecting'), 'busy');
  await new Promise(r => setTimeout(r, 30));
  let boxes = [];
  try { boxes = await Engine.detectPeople(S.work); } catch (e) { console.error(e); }
  S.people = boxes.map(b => ({ box: b, mask: null, selected: false }));
  renderMarkers(); renderPeopleList();
  setStatus(t('stFound', S.people.length), S.people.length ? 'ok' : '');
  updateHint(); S.detecting = false;
}

/* ---------- people markers ---------- */
function renderMarkers() {
  const m = $('markers'); m.innerHTML = '';
  if (!S.work) return;
  S.people.forEach((p, i) => {
    const b = p.box; const el = document.createElement('button'); el.type = 'button'; el.className = 'marker' + (p.selected ? ' on' : '');
    el.style.left = ((b.x + b.w / 2) / S.W * 100) + '%'; el.style.top = ((b.y + Math.min(b.h * 0.15, b.w * 0.35)) / S.H * 100) + '%';
    el.innerHTML = `<span>${p.selected ? '✓' : i + 1}</span>`; el.setAttribute('aria-label', t('personN', i + 1));
    el.addEventListener('click', (e) => { e.stopPropagation(); togglePerson(i); });
    el.addEventListener('pointerdown', e => e.stopPropagation());
    m.appendChild(el);
  });
  m.hidden = !(S.step === 1 && S.tool === 'select');
}
function renderPeopleList() {
  const l = $('personList'); l.innerHTML = ''; $('foundCount').textContent = S.people.length ? String(S.people.length) : '0';
  S.people.forEach((p, i) => {
    const b = document.createElement('button'); b.type = 'button'; b.className = 'chip' + (p.selected ? ' on' : ''); b.setAttribute('aria-pressed', p.selected);
    b.innerHTML = `<span class="n">${p.selected ? '✓' : i + 1}</span><span class="t">${t('personN', i + 1)}</span><span class="s">${(p.box.score * 100).toFixed(0)}%</span>`;
    b.addEventListener('click', () => togglePerson(i)); l.appendChild(b);
  });
}
async function togglePerson(i) {
  const p = S.people[i]; if (!p || S.busy) return;
  if (p.selected) { pushUndo(); for (let k = 0; k < S.mask.length; k++) S.mask[k] = Math.min(S.mask[k], 1 - (p.mask ? p.mask[k] : 0)); p.selected = false; S.maskVer++; afterMaskChange(); return; }
  if (!p.mask) {
    if (!Engine.ready) { toast(t('stNoModel')); return; }
    S.busy = true; setStatus(t('stSegmenting'), 'busy');
    const el = $('markers').children[i]; if (el) el.classList.add('busy');
    await new Promise(r => setTimeout(r, 30));
    try {
      const b = p.box; const m = await Engine.segmentPerson(S.work, b.x + b.w / 2, b.y + b.h * 0.42, b);
      if (Engine.maskArea(m) < S.W * S.H * 0.002) { // try chest point
        const m2 = await Engine.segmentPerson(S.work, b.x + b.w / 2, b.y + b.h * 0.25, b);
        p.mask = Engine.maskArea(m2) > Engine.maskArea(m) ? m2 : m;
      } else p.mask = m;
    } catch (e) { console.error(e); toast(t('toastNoPerson')); S.busy = false; setStatus(t('stFound', S.people.length)); return; }
    S.busy = false;
  }
  pushUndo(); for (let k = 0; k < S.mask.length; k++) S.mask[k] = Math.max(S.mask[k], p.mask[k]); p.selected = true; S.maskVer++;
  afterMaskChange();
}
async function tapAt(x, y) {
  if (!Engine.ready || S.busy) return;
  const inside = S.mask[Math.round(y) * S.W + Math.round(x)] > 0.5;
  S.busy = true; setStatus(t('stSegmenting'), 'busy');
  await new Promise(r => setTimeout(r, 30));
  try {
    const m = await Engine.segmentAt(S.work, x, y, null);
    const area = Engine.maskArea(m);
    if (area < S.W * S.H * 0.001 || area > S.W * S.H * 0.9) { toast(t('toastNoPerson')); S.busy = false; afterMaskChange(); return; }
    pushUndo();
    if (inside) for (let k = 0; k < S.mask.length; k++) S.mask[k] = Math.min(S.mask[k], 1 - m[k]);
    else for (let k = 0; k < S.mask.length; k++) S.mask[k] = Math.max(S.mask[k], m[k]);
    S.maskVer++;
  } catch (e) { console.error(e); toast(t('toastNoPerson')); }
  S.busy = false; afterMaskChange();
}
function selectedCount() { return S.people.filter(p => p.selected).length; }
function maskHasContent() { return S.mask && Engine.maskArea(S.mask) > 50; }
function afterMaskChange() {
  renderMarkers(); renderPeopleList();
  const has = maskHasContent();
  $('next1').disabled = !has; [2, 3, 4].forEach(n => $('tab' + n).disabled = !has);
  $('tab1').classList.toggle('done', has);
  setStatus(has ? t('stSelected', selectedCount() || 1) : t('stFound', S.people.length), has ? 'ok' : '');
  renderPreview();
}
function pushUndo() {
  if (!S.mask) return;
  const q = new Uint8Array(S.mask.length); for (let i = 0; i < q.length; i++) q[i] = S.mask[i] * 255;
  S.undo.push({ q, people: S.people.map(p => p.selected) }); if (S.undo.length > 8) S.undo.shift();
}
function undo() {
  const u = S.undo.pop(); if (!u) return;
  for (let i = 0; i < u.q.length; i++) S.mask[i] = u.q[i] / 255; S.people.forEach((p, i) => p.selected = u.people[i]); S.maskVer++;
  afterMaskChange();
}

/* ---------- brush ---------- */
function paintAt(x, y, radius, add) {
  const W = S.W, H = S.H, r2 = radius * radius, soft = Math.max(1, radius * 0.25);
  const x0 = Math.max(0, Math.floor(x - radius)), x1 = Math.min(W - 1, Math.ceil(x + radius)), y0 = Math.max(0, Math.floor(y - radius)), y1 = Math.min(H - 1, Math.ceil(y + radius));
  for (let yy = y0; yy <= y1; yy++) for (let xx = x0; xx <= x1; xx++) {
    const d2 = (xx - x) * (xx - x) + (yy - y) * (yy - y); if (d2 > r2) continue;
    const d = Math.sqrt(d2); const a = d > radius - soft ? (radius - d) / soft : 1; const i = yy * W + xx;
    if (add) S.mask[i] = Math.max(S.mask[i], a); else S.mask[i] = Math.min(S.mask[i], 1 - a);
  }
}
function snapEdges() {
  if (!S.mask || !S.lum) return; pushUndo();
  const r = Math.max(2, Math.round(Math.min(S.W, S.H) * 0.008));
  const q = guidedFilter(S.lum, S.mask, S.W, S.H, r, 0.002);
  for (let i = 0; i < q.length; i++) { const v = (q[i] - 0.5) / 0.3 + 0.5; S.mask[i] = v <= 0 ? 0 : v >= 1 ? 1 : v; }
  S.maskVer++; afterMaskChange();
}

/* ---------- rendering ---------- */
const styleCache = { key: null, fill: null, outline: null, bbox: null };
function styleParams(scale) {
  const st = S.style, minDim = Math.min(S.W, S.H) * scale;
  return { edge: st.edge, rough: st.rough, expand: st.expand * minDim / 1000, outline: st.outline ? st.outlineWidth * minDim / 1000 : 0, seed: st.seed };
}
function getStyled(alpha, W, H, scale, cacheable) {
  const P = styleParams(scale);
  const key = [S.maskVer, W, H, P.edge, P.rough, P.expand, P.outline, P.seed].join('|');
  if (cacheable && styleCache.key === key) return styleCache;
  const { fill, outline } = styleMask(alpha, W, H, P);
  let x0 = W, y0 = H, x1 = -1, y1 = -1;
  for (let y = 0; y < H; y += 2) for (let x = 0; x < W; x += 2) if (fill[y * W + x] > 0.5) { if (x < x0) x0 = x; if (x > x1) x1 = x; if (y < y0) y0 = y; if (y > y1) y1 = y; }
  const bbox = x1 < 0 ? null : { x: x0, y: y0, w: x1 - x0 + 1, h: y1 - y0 + 1 };
  const res = { key, fill, outline, bbox };
  if (cacheable) Object.assign(styleCache, res);
  return res;
}
const photoCache = { key: null, canvas: null };
function filteredPhoto(photo, W, H) {
  const f = S.style.filter || 'none';
  if (f === 'none') return photo;
  const key = [f, W, H, photo === S.work ? 'work' : 'full'].join('|');
  if (photoCache.key === key) return photoCache.canvas;
  const c = document.createElement('canvas'); c.width = W; c.height = H; const cx = c.getContext('2d', { willReadFrequently: true });
  cx.drawImage(photo, 0, 0, W, H);
  const id = cx.getImageData(0, 0, W, H), d = id.data;
  for (let p = 0; p < d.length; p += 4) { const l = 0.299 * d[p] + 0.587 * d[p + 1] + 0.114 * d[p + 2]; d[p] = d[p + 1] = d[p + 2] = l; }
  cx.putImageData(id, 0, 0);
  photoCache.key = key; photoCache.canvas = c; return c;
}
function composeScene(ctx, W, H, photo, styled, scale, opts) {
  ctx.clearRect(0, 0, W, H); ctx.drawImage(filteredPhoto(photo, W, H), 0, 0, W, H);
  const st = S.style;
  if (styled.outline) ctx.drawImage(alphaToCanvas(styled.outline, W, H, hexToRgb(st.outlineColor), st.opacity), 0, 0);
  const fillC = alphaToCanvas(styled.fill, W, H, hexToRgb(st.color), st.opacity);
  ctx.drawImage(fillC, 0, 0);
  const bboxes = [];
  for (const L of S.layers) {
    if (L.mode === 'fill') {
      if (!styled.bbox) continue;
      const off = document.createElement('canvas'); off.width = W; off.height = H; const oc = off.getContext('2d');
      drawFillText(oc, L, W, H, styled.bbox);
      oc.globalCompositeOperation = 'destination-in'; oc.drawImage(alphaToCanvas(styled.fill, W, H, [255, 255, 255], 1), 0, 0);
      ctx.drawImage(off, 0, 0); bboxes.push({ id: L.id, pts: null });
    } else if (L.clip !== false && styled.bbox) {
      const off = document.createElement('canvas'); off.width = W; off.height = H; const oc = off.getContext('2d');
      const bb = drawTextLayer(oc, L, W, H, false, styled.bbox.w * 0.92);
      oc.globalCompositeOperation = 'destination-in'; oc.drawImage(alphaToCanvas(styled.fill, W, H, [255, 255, 255], 1), 0, 0);
      ctx.drawImage(off, 0, 0); bboxes.push({ id: L.id, ...bb });
    } else {
      const bb = drawTextLayer(ctx, L, W, H, false, W * 0.92); bboxes.push({ id: L.id, ...bb });
    }
  }
  if (opts && opts.showActiveBox && S.active != null) {
    const bb = bboxes.find(b => b.id === S.active); if (bb && bb.pts) {
      ctx.save(); ctx.strokeStyle = 'rgba(255,255,255,.9)'; ctx.lineWidth = Math.max(1, W / 600); ctx.setLineDash([W / 150, W / 200]);
      ctx.shadowColor = 'rgba(0,0,0,.6)'; ctx.shadowBlur = W / 300;
      ctx.beginPath(); bb.pts.forEach((p, i) => i ? ctx.lineTo(p[0] - 0, p[1]) : ctx.moveTo(p[0], p[1])); ctx.closePath(); ctx.stroke(); ctx.restore();
    }
  }
  return bboxes;
}
let rafPending = false, lastBoxes = [];
function renderPreview() { if (rafPending) return; rafPending = true; requestAnimationFrame(() => { rafPending = false; renderPreviewNow(); }); }
function renderPreviewNow() {
  if (!S.work) return;
  const pv = $('preview'), ctx = pv.getContext('2d'); const W = S.W, H = S.H;
  const editing = S.step === 1 && S.tool !== 'select';
  if (editing) { // raw mask tint for precise brushing
    ctx.clearRect(0, 0, W, H); ctx.drawImage(filteredPhoto(S.work, W, H), 0, 0);
    ctx.drawImage(alphaToCanvas(S.mask, W, H, hexToRgb('#EE2A78'), 0.55), 0, 0);
    return;
  }
  const styled = getStyled(S.mask, W, H, 1, true);
  lastBoxes = composeScene(ctx, W, H, S.work, styled, 1, { showActiveBox: S.step === 3 });
  if (S.step === 4) { $('previewImg').src = pv.toDataURL('image/jpeg', 0.9); }
}
async function renderFinalBlob() {
  const lowMem = (navigator.deviceMemory && navigator.deviceMemory <= 4) || /iPhone|iPad|Android/i.test(navigator.userAgent);
  const cap = lowMem ? 2400 : 3200; const sc = Math.min(1, cap / Math.max(S.fullW, S.fullH));
  const W = Math.round(S.fullW * sc), H = Math.round(S.fullH * sc); const scale = W / S.W;
  const c = document.createElement('canvas'); c.width = W; c.height = H; const ctx = c.getContext('2d');
  // upscale the mask smoothly
  const mc = alphaToCanvas(S.mask, S.W, S.H, [255, 255, 255], 1);
  const up = document.createElement('canvas'); up.width = W; up.height = H; const uc = up.getContext('2d', { willReadFrequently: true });
  uc.imageSmoothingEnabled = true; uc.imageSmoothingQuality = 'high'; uc.drawImage(mc, 0, 0, W, H);
  const d = uc.getImageData(0, 0, W, H).data; const alpha = new Float32Array(W * H);
  for (let i = 0; i < alpha.length; i++) alpha[i] = d[i * 4 + 3] / 255;
  const styled = getStyled(alpha, W, H, scale, false);
  composeScene(ctx, W, H, S.img, styled, scale, null);
  const type = S.fmt === 'png' ? 'image/png' : 'image/jpeg';
  return await new Promise(res => c.toBlob(res, type, 0.93));
}

/* ---------- text layers ---------- */
function addLayer(mode) {
  const id = ++S.layerSeq;
  const bb = styleCache.bbox; let x = 0.5, y = 0.5;
  const text = mode === 'fill' ? t('newFill') : t('newText');
  let size = mode === 'fill' ? 2.6 : 3.5;
  if (bb) {
    x = (bb.x + bb.w / 2) / S.W; y = (bb.y + bb.h * 0.42) / S.H;
    const minDim = Math.min(S.W, S.H); const cjk = /[\u3000-\u9fff]/.test(text);
    const em = bb.w / (mode === 'fill' ? 13 : (cjk ? 6 : 11));
    size = Math.round(Math.min(9, Math.max(1, em / minDim * 100)) * 4) / 4;
  }
  const L = { id, mode, text, fontId: 'typewriter', size, color: '#111111', align: 'center', rot: 0, ls: 0, lh: 1.3, x, y, vertical: false, clip: true };
  S.layers.push(L); S.active = id; renderLayerList(); syncEditor(); ensureFont(FONTS[0], L.text).then(renderPreview); renderPreview();
}
function activeLayer() { return S.layers.find(l => l.id === S.active) || null; }
function renderLayerList() {
  const el = $('layers'); el.innerHTML = '';
  S.layers.forEach(L => {
    const row = document.createElement('div'); row.className = 'layer' + (L.id === S.active ? ' on' : '');
    row.innerHTML = `<button type="button" class="txt"></button><span class="mode">${L.mode === 'fill' ? t('layerFill') : t('layerFree')}</span><button type="button" class="del" aria-label="delete">×</button>`;
    row.querySelector('.txt').textContent = L.text.replace(/\n/g, ' ') || '…';
    row.querySelector('.txt').addEventListener('click', () => { S.active = L.id; renderLayerList(); syncEditor(); renderPreview(); });
    row.querySelector('.del').addEventListener('click', () => { S.layers = S.layers.filter(x => x.id !== L.id); if (S.active === L.id) S.active = S.layers.length ? S.layers[S.layers.length - 1].id : null; renderLayerList(); syncEditor(); renderPreview(); });
    el.appendChild(row);
  });
  $('textEditor').hidden = !S.layers.length;
}
function syncEditor() {
  const L = activeLayer(); if (!L) return;
  $('textInput').value = L.text; $('textSize').value = L.size; $('sizeVal').textContent = L.size + '%';
  $('textRot').value = L.rot; $('rotVal').textContent = L.rot + '°'; $('textLs').value = L.ls; $('lsVal').textContent = L.ls; $('textLh').value = L.lh; $('lhVal').textContent = L.lh;
  $('textColorVal').textContent = L.color.toUpperCase();
  document.querySelectorAll('#textSwatches .sw').forEach(b => b.setAttribute('aria-pressed', b.dataset.c && b.dataset.c.toUpperCase() === L.color.toUpperCase()));
  document.querySelectorAll('#alignSeg [data-align]').forEach(b => b.setAttribute('aria-pressed', b.dataset.align === L.align));
  $('vertical').setAttribute('aria-pressed', !!L.vertical); $('vertical').disabled = L.mode === 'fill'; $('textRot').disabled = L.mode === 'fill'; $('centerText').disabled = L.mode === 'fill';
  $('clipSwitch').setAttribute('aria-checked', L.clip !== false); $('clipSwitch').disabled = L.mode === 'fill';
  document.querySelectorAll('#textEditor input[type="range"]').forEach(syncRange);
  document.querySelectorAll('#fontGrid button').forEach(b => b.setAttribute('aria-pressed', b.dataset.font === L.fontId));
}
function buildFontGrid() {
  const g = $('fontGrid'); g.innerHTML = '';
  FONTS.forEach(f => {
    const b = document.createElement('button'); b.type = 'button'; b.dataset.font = f.id;
    b.innerHTML = `<span class="sample" style="font-family:${fontCss(f).replace(/"/g, '&quot;')}">${f.sample}</span><span class="name">${t(f.name)}</span>`;
    b.addEventListener('click', async () => { const L = activeLayer(); if (!L) return; L.fontId = f.id; syncEditor(); renderPreview(); await ensureFont(f, L.text); renderPreview(); });
    g.appendChild(b);
  });
  // lazy-load samples for the grid when step 3 opens (CJK samples use text subsetting)
}
let fontTimer = null;
function onTextEdited() {
  const L = activeLayer(); if (!L) return; L.text = $('textInput').value; renderLayerList(); renderPreview();
  clearTimeout(fontTimer); fontTimer = setTimeout(async () => { await ensureFont(FONTS.find(f => f.id === L.fontId), L.text); renderPreview(); }, 350);
}
function buildSwatches(container, colors, get, set) {
  container.innerHTML = '';
  colors.forEach(c => { const b = document.createElement('button'); b.type = 'button'; b.className = 'sw'; b.dataset.c = c; b.style.background = c; b.setAttribute('aria-label', c); b.setAttribute('aria-pressed', get().toUpperCase() === c.toUpperCase()); b.addEventListener('click', () => { set(c); refresh(); }); container.appendChild(b); });
  const custom = document.createElement('label'); custom.className = 'sw custom'; custom.title = 'custom';
  const inp = document.createElement('input'); inp.type = 'color'; inp.value = get(); inp.addEventListener('input', () => { set(inp.value.toUpperCase()); refresh(); }); custom.appendChild(inp); container.appendChild(custom);
  function refresh() { container.querySelectorAll('.sw[data-c]').forEach(b => b.setAttribute('aria-pressed', b.dataset.c.toUpperCase() === get().toUpperCase())); inp.value = get(); }
  return refresh;
}

/* ---------- steps & tools ---------- */
function goStep(n) {
  S.step = n;
  [1, 2, 3, 4].forEach(k => { $('step' + k).hidden = k !== n; $('tab' + k).setAttribute('aria-selected', k === n); });
  if (n !== 1) setTool('select', true); else setTool(S.tool, true);
  if (n === 3 && !S.layers.length) addLayer('free');
  if (n === 3) { FONTS.filter(f => f.cjk).forEach(f => ensureFont(f, '再见')); FONTS.filter(f => !f.cjk).forEach(f => ensureFont(f, '')); }
  const img = $('previewImg'), pv = $('preview');
  img.hidden = n !== 4; pv.style.visibility = n === 4 ? 'hidden' : 'visible';
  renderMarkers(); updateHint(); renderPreview();
  if (n === 4) setTimeout(renderPreviewNow, 50);
  if (n >= 2) $('tab1').classList.add('done'); if (n >= 3) $('tab2').classList.add('done'); if (n >= 4) $('tab3').classList.add('done');
  if (window.innerWidth < 920 && S.work) { const top = $('panel').getBoundingClientRect().top + window.scrollY - $('stageWrap').offsetHeight - 4; window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' }); }
}
function setTool(tool, silent) {
  S.tool = tool; $('frame').classList.toggle('interactive', (S.step === 1 && tool !== 'select') || S.step === 3);
  ['toolSelect:select', 'toolAdd:add', 'toolSub:sub'].forEach(s => { const [id, v] = s.split(':'); $(id).setAttribute('aria-pressed', v === tool); });
  renderMarkers(); updateHint(); if (!silent) renderPreview();
}
function updateHint() {
  if (!S.work) { hint(null); return; }
  if (S.step === 1) hint(S.tool === 'select' ? null : t('hintBrush'));
  else if (S.step === 3) hint(S.layers.some(l => l.mode === 'free') ? t('hintDrag') : null);
  else hint(null);
}

/* ---------- pointer interaction on the frame ---------- */
(function pointer() {
  const frame = $('frame'), pv = $('preview'), cursor = $('brushCursor');
  let down = false, moved = false, start = null, dragLayer = null, dragOff = null, lastPt = null;
  const toWork = (e) => { const r = pv.getBoundingClientRect(); return { x: (e.clientX - r.left) / r.width * S.W, y: (e.clientY - r.top) / r.height * S.H, sx: e.clientX - r.left, sy: e.clientY - r.top, scale: S.W / r.width }; };
  const brushWorkRadius = (p) => S.brush / 2 * p.scale;
  function ptInPoly(x, y, pts) { let inside = false; for (let i = 0, j = pts.length - 1; i < pts.length; j = i++) { const xi = pts[i][0], yi = pts[i][1], xj = pts[j][0], yj = pts[j][1]; if (((yi > y) !== (yj > y)) && (x < (xj - xi) * (y - yi) / (yj - yi) + xi)) inside = !inside; } return inside; }
  frame.addEventListener('pointerdown', (e) => {
    if (!S.work || e.button > 0) return; frame.setPointerCapture(e.pointerId);
    const p = toWork(e); down = true; moved = false; start = p; lastPt = p;
    if (S.step === 1 && S.tool !== 'select') { pushUndo(); paintAt(p.x, p.y, brushWorkRadius(p), S.tool === 'add'); S.maskVer++; renderPreview(); e.preventDefault(); }
    else if (S.step === 3) {
      dragLayer = null;
      for (let i = lastBoxes.length - 1; i >= 0; i--) { const b = lastBoxes[i]; if (b.pts && ptInPoly(p.x, p.y, b.pts)) { dragLayer = S.layers.find(l => l.id === b.id); break; } }
      if (dragLayer) { S.active = dragLayer.id; dragOff = { x: dragLayer.x * S.W - p.x, y: dragLayer.y * S.H - p.y }; renderLayerList(); syncEditor(); renderPreview(); e.preventDefault(); }
    }
  });
  frame.addEventListener('pointermove', (e) => {
    if (!S.work) return; const p = toWork(e);
    if (S.step === 1 && S.tool !== 'select') { cursor.style.display = 'block'; cursor.style.left = p.sx + 'px'; cursor.style.top = p.sy + 'px'; cursor.style.width = cursor.style.height = S.brush + 'px'; }
    else cursor.style.display = 'none';
    if (!down) return;
    if (Math.hypot(p.x - start.x, p.y - start.y) > 3 * p.scale) moved = true;
    if (S.step === 1 && S.tool !== 'select') {
      // interpolate stamps
      const r = brushWorkRadius(p); const d = Math.hypot(p.x - lastPt.x, p.y - lastPt.y); const n = Math.max(1, Math.ceil(d / (r * 0.35)));
      for (let i = 1; i <= n; i++) paintAt(lastPt.x + (p.x - lastPt.x) * i / n, lastPt.y + (p.y - lastPt.y) * i / n, r, S.tool === 'add');
      lastPt = p; S.maskVer++; renderPreview();
    } else if (S.step === 3 && dragLayer) {
      dragLayer.x = Math.min(1.2, Math.max(-0.2, (p.x + dragOff.x) / S.W)); dragLayer.y = Math.min(1.2, Math.max(-0.2, (p.y + dragOff.y) / S.H)); renderPreview();
    }
  });
  const up = (e) => {
    if (!down) return; down = false; const p = toWork(e);
    if (S.step === 1 && S.tool === 'select' && !moved) tapAt(Math.min(S.W - 1, Math.max(0, p.x)), Math.min(S.H - 1, Math.max(0, p.y)));
    if (S.step === 1 && S.tool !== 'select') afterMaskChange();
    dragLayer = null;
  };
  frame.addEventListener('pointerup', up); frame.addEventListener('pointercancel', () => { down = false; dragLayer = null; });
  frame.addEventListener('pointerleave', () => { cursor.style.display = 'none'; });
})();

/* ---------- wiring ---------- */
function wire() {
  // language
  try { const l = localStorage.getItem('exmask.lang'); LANG = l || (navigator.language && navigator.language.toLowerCase().startsWith('zh') ? 'zh' : 'en'); } catch (e) { LANG = 'zh'; }
  $('langZh').addEventListener('click', () => setLang('zh')); $('langEn').addEventListener('click', () => setLang('en'));
  // file pick / drop / paste
  const fi = $('fileInput');
  ['pickBtn', 'changeBtn'].forEach(id => $(id).addEventListener('click', () => { fi.value = ''; fi.click(); }));
  fi.addEventListener('change', () => { if (fi.files[0]) loadImageFile(fi.files[0]); });
  [$('stage'), $('panel'), document.body].forEach(el => {
    el.addEventListener('dragover', e => { e.preventDefault(); });
    el.addEventListener('drop', e => { e.preventDefault(); const f = e.dataTransfer.files && e.dataTransfer.files[0]; if (f) loadImageFile(f); });
  });
  document.addEventListener('paste', e => { const items = e.clipboardData && e.clipboardData.items; if (!items) return; for (const it of items) if (it.type.startsWith('image/')) { loadImageFile(it.getAsFile()); break; } });
  // steps
  document.querySelectorAll('.steps button').forEach(b => b.addEventListener('click', () => { if (!b.disabled) goStep(+b.dataset.step); }));
  $('next1').addEventListener('click', () => goStep(2)); $('back2').addEventListener('click', () => goStep(1)); $('next2').addEventListener('click', () => goStep(3));
  $('back3').addEventListener('click', () => goStep(2)); $('next3').addEventListener('click', () => goStep(4)); $('back4').addEventListener('click', () => goStep(3));
  $('restart').addEventListener('click', () => { resetForNewImage(); S.img = null; S.work = null; $('stageWrap').classList.remove('pinned'); $('frame').hidden = true; $('intro').hidden = false; $('panel').hidden = true; $('peopleWrap').hidden = true; $('changeBtn').hidden = true; $('undoBtn').hidden = true; goStep(1); setStatus(t('statusIdle')); });
  // tools
  $('toolSelect').addEventListener('click', () => setTool('select')); $('toolAdd').addEventListener('click', () => setTool('add')); $('toolSub').addEventListener('click', () => setTool('sub'));
  $('brushSize').addEventListener('input', e => { S.brush = +e.target.value; $('brushVal').textContent = S.brush; });
  $('clearMask').addEventListener('click', () => { if (!S.mask) return; pushUndo(); S.mask.fill(0); S.people.forEach(p => p.selected = false); S.maskVer++; afterMaskChange(); });
  $('snapEdge').addEventListener('click', () => { if (!S.mask) return; setStatus(t('stPainting'), 'busy'); setTimeout(snapEdges, 20); });
  $('undoBtn').addEventListener('click', undo);
  // style
  const st = S.style;
  const refreshFill = buildSwatches($('fillSwatches'), FILL_SWATCHES, () => st.color, c => { st.color = c; $('fillVal').textContent = c; renderPreview(); });
  const refreshOutline = buildSwatches($('outlineSwatches'), ['#FFFFFF', '#111111', '#EE2A78', '#2E6BFF', '#F2C230'], () => st.outlineColor, c => { st.outlineColor = c; renderPreview(); });
  $('opacity').addEventListener('input', e => { st.opacity = +e.target.value / 100; $('opacityVal').textContent = e.target.value + '%'; renderPreview(); });
  document.querySelectorAll('#filterSeg [data-filter]').forEach(b => b.addEventListener('click', () => { st.filter = b.dataset.filter; document.querySelectorAll('#filterSeg [data-filter]').forEach(x => x.setAttribute('aria-pressed', x === b)); renderPreview(); }));
  document.querySelectorAll('#edgeSeg [data-edge]').forEach(b => b.addEventListener('click', () => { st.edge = b.dataset.edge; document.querySelectorAll('#edgeSeg [data-edge]').forEach(x => x.setAttribute('aria-pressed', x === b)); renderPreview(); }));
  $('rough').addEventListener('input', e => { st.rough = +e.target.value / 100; $('roughVal').textContent = e.target.value; renderPreview(); });
  $('expand').addEventListener('input', e => { st.expand = +e.target.value; $('expandVal').textContent = (st.expand >= 0 ? '+' : '') + st.expand; renderPreview(); });
  $('reroll').addEventListener('click', () => { st.seed = (Math.random() * 1e9) | 0; renderPreview(); });
  $('outlineSwitch').addEventListener('click', () => { st.outline = !st.outline; $('outlineSwitch').setAttribute('aria-checked', st.outline); $('outlineOpts').hidden = !st.outline; if (st.outline) syncRange($('outlineWidth')); renderPreview(); });
  $('outlineWidth').addEventListener('input', e => { st.outlineWidth = +e.target.value; $('outlineVal').textContent = st.outlineWidth; renderPreview(); });
  // text
  $('addText').addEventListener('click', () => addLayer('free')); $('addFill').addEventListener('click', () => addLayer('fill'));
  $('textInput').addEventListener('input', onTextEdited);
  $('textSize').addEventListener('input', e => { const L = activeLayer(); if (!L) return; L.size = +e.target.value; $('sizeVal').textContent = L.size + '%'; renderPreview(); });
  $('textRot').addEventListener('input', e => { const L = activeLayer(); if (!L) return; L.rot = +e.target.value; $('rotVal').textContent = L.rot + '°'; renderPreview(); });
  $('textLs').addEventListener('input', e => { const L = activeLayer(); if (!L) return; L.ls = +e.target.value; $('lsVal').textContent = L.ls; renderPreview(); });
  $('textLh').addEventListener('input', e => { const L = activeLayer(); if (!L) return; L.lh = +e.target.value; $('lhVal').textContent = L.lh; renderPreview(); });
  buildSwatches($('textSwatches'), TEXT_SWATCHES, () => (activeLayer() || { color: '#111111' }).color, c => { const L = activeLayer(); if (!L) return; L.color = c; $('textColorVal').textContent = c; renderPreview(); });
  document.querySelectorAll('#alignSeg [data-align]').forEach(b => b.addEventListener('click', () => { const L = activeLayer(); if (!L) return; L.align = b.dataset.align; syncEditor(); renderPreview(); }));
  $('clipSwitch').addEventListener('click', () => { const L = activeLayer(); if (!L) return; L.clip = L.clip === false; syncEditor(); renderPreview(); });
  document.addEventListener('input', e => { if (e.target && e.target.type === 'range') syncRange(e.target); });
  document.querySelectorAll('input[type="range"]').forEach(syncRange);
  $('vertical').addEventListener('click', () => { const L = activeLayer(); if (!L) return; L.vertical = !L.vertical; syncEditor(); renderPreview(); });
  $('centerText').addEventListener('click', () => { const L = activeLayer(); const bb = styleCache.bbox; if (!L || !bb) return; L.x = (bb.x + bb.w / 2) / S.W; L.y = (bb.y + bb.h * 0.42) / S.H; renderPreview(); });
  $('delText').addEventListener('click', () => { const L = activeLayer(); if (!L) return; S.layers = S.layers.filter(x => x.id !== L.id); S.active = S.layers.length ? S.layers[S.layers.length - 1].id : null; renderLayerList(); syncEditor(); renderPreview(); });
  // export
  $('fmtJpg').addEventListener('click', () => { S.fmt = 'jpg'; $('fmtJpg').setAttribute('aria-pressed', 'true'); $('fmtPng').setAttribute('aria-pressed', 'false'); });
  $('fmtPng').addEventListener('click', () => { S.fmt = 'png'; $('fmtJpg').setAttribute('aria-pressed', 'false'); $('fmtPng').setAttribute('aria-pressed', 'true'); });
  $('saveBtn').addEventListener('click', async () => {
    if (!S.work || S.busy) return; S.busy = true; $('saveBtn').disabled = true; setStatus(t('stExporting'), 'busy');
    try {
      await new Promise(r => setTimeout(r, 30));
      const blob = await renderFinalBlob();
      const filename = `exmask-${Date.now()}.${S.fmt === 'png' ? 'png' : 'jpg'}`;
      await saveStandalone(blob, filename);
    } catch (e) { console.error(e); toast(t('toastImgFail')); }
    S.busy = false; $('saveBtn').disabled = false; setStatus(t('stSelected', selectedCount() || 1), 'ok');
  });
  [2, 3, 4].forEach(n => $('tab' + n).disabled = true); setTool('select', true); $('panel').hidden = true;
  applyLang();
  // engine preload
  const bar = $('modelProgress').firstElementChild;
  Engine.init(p => { bar.style.width = Math.round(p * 100) + '%'; }).then(() => { setTimeout(() => $('modelProgress').hidden = true, 600); if (S.work && !S.people.length) detectPeople(); })
    .catch(() => { $('modelProgress').hidden = true; if (S.work) { setStatus(t('stNoModel')); setTool('add'); } });
}
wire();

// local debug hooks (added for benchmarking; does not affect normal use)
window.__app = { S, Engine, loadImageFile, tapAt, afterMaskChange, goStep, renderPreview, renderPreviewNow, renderFinalBlob, addLayer, renderLayerList, syncEditor, setTool, detectPeople, togglePerson, renderMarkers, renderPeopleList };
