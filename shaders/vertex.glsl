precision mediump float;

attribute vec2 aPosition;
uniform float theta;
// uniform float scaleX;
// uniform float scaleY;
void main() {

  vec2 translate = vec2(-0.5, 0.0);

  mat4 rotate = mat4(
    cos(theta), sin(theta), 0.0, 0.0,
    -sin(theta), cos(theta), 0.0, 0.0,
    0.0, 0.0, 1.0, 0.0,
    0.0, 0.0, 0.0, 1.0
  );

  // mat4 skalasi = mat4(
  //   scaleX, 0.0, 0.0, 0.0,
  //   0.0, scaleY, 0.0, 0.0,
  //   0.0, 0.0, 1.0, 0.0,
  //   0.0, 0.0, 0.0, 1.0
  // );

  gl_Position = rotate* vec4(aPosition, 0.0, 1.0);
  
}