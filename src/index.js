import {Curtains} from 'curtainsjs';

const productionMode = process.env.NODE_ENV === 'production';

const render = (elementId, container) => {
  const curtains = new Curtains(elementId, productionMode);

  // initial parameters (basic uniforms)
  const params = {
    vertexShaderID: "plane-vs",
    fragmentShaderID: "plane-fs",
    uniforms: {
      time: {
        name: "uTime",
        type: "1f",
        value: 0,
      },
    },
  };

  const plane = curtains.addPlane(container, params);

  if (!plane) {
    console.error('[blinds]', 'Failed to create curtains plane');
  }

  plane.onRender(() => plane.uniforms.time.value++);
}

export default { render };
