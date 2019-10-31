(function(global) {

    var canvas, gl, program, program;
  
    glUtils.SL.init({ callback:function() { main(); } });
  
    function main() {
      // Register Callbacks
      window.addEventListener('resize', resizer);
  
      // Get canvas element and check if WebGL enabled
      canvas = document.getElementById("glcanvas");
      gl = glUtils.checkWebGL(canvas);
  
      // Initialize the shaders and program
      var vertexShader = glUtils.getShader(gl, gl.VERTEX_SHADER, glUtils.SL.Shaders.v1.vertex),
          fragmentShader = glUtils.getShader(gl, gl.FRAGMENT_SHADER, glUtils.SL.Shaders.v1.fragment);

      var vertexShader2 = glUtils.getShader(gl, gl.VERTEX_SHADER, glUtils.SL.Shaders.v2.vertex);
  
      program = glUtils.createProgram(gl, vertexShader, fragmentShader);
      program2 = glUtils.createProgram(gl, vertexShader2, fragmentShader);
  
      // gl.useProgram(program);
      //gl.useProgram(program);
      
  
      resizer();
    }
  
    // draw!
    function draw() {
      var thetaLoc = gl.getUniformLocation(program, 'theta');
      var theta = 0;

      var scaleXLoc2 = gl.getUniformLocation(program2, 'scaleX');
      var scaleX2 = 1.0;

      var tambah = 1.0;

      function animasi1(){
        gl.useProgram(program);
        theta += 0.0188;
        
        // renderer info
        gl.clearColor(0, 0, 0, 1);
        gl.clear(gl.COLOR_BUFFER_BIT);

        gl.uniform1f(thetaLoc,theta);
    
        // Write the positions of vertices to a vertex shader
        drawLine1();
        drawLine2();
        // drawLine3();
        // drawLine4();
        requestAnimationFrame(animasi1);
      }

      animasi1();
      
      function animasi2(){
        gl.useProgram(program2);
        
        if (scaleX2 >= 1.0) tambah = -0.0188;
        else if (scaleX2 <= -1.0) tambah = 0.0188;
        scaleX2 += tambah;

        // gl.clearColor(0, 0, 0, 1);
        // gl.clear(gl.COLOR_BUFFER_BIT);

        gl.uniform1f(scaleXLoc2, scaleX2);

        drawTriangle1();
        drawTriangle2();
        drawTriangle3();
        drawTriangle4();
        drawTriangle5();
        drawTriangle6();
        drawTriangle7();
        drawTriangle8();

        requestAnimationFrame(animasi2);
      }
      
      animasi2();
    }
  
    function drawLine1() {
      var n = initLine1Buffers();
      if (n < 0) {
        console.log('Failed to set the positions of the vertices');
        return;
      }
      gl.drawArrays(gl.LINES, 0, n);
    }
  
    function initLine1Buffers() {
      var vertices = new Float32Array([
        0.115, +0.5, //atas
        +0.185, +0.5,
        +0.185, +0.5, //kanan
        +0.185, -0.23,
        +0.185, -0.23, //bawah kanan
        0.115, -0.1,
        0.115, -0.1, //kaki kanan
        0.115, 0.22,
        0.115, 0.22, //bawah segitiga
        +0.005, -0.2,
        +0.005, -0.2, //kaki kiri
        0.115, -0.2,
        0.115, -0.2, //segitiga atas
        0.115, -0.12,
        0.115, -0.12, //segitiga kenan atas
        +0.185, -0.25,
        +0.185, -0.25, //segitiga kanan bawah
        0.115, -0.38,
        0.115, -0.38, //segitiga bawah
        0.115, -0.3,
        0.115, -0.3, //dasar tengah
        -0.015, -0.3,
        -0.015, -0.3, //kaki kiri
        -0.095, -0.6,
        -0.095, -0.6, //bawah kiri
        -0.185, -0.6,
        -0.185, -0.6, //kiri
        0.115, +0.5
      ]);
      var n = 28;
  
      var vertexBuffer = gl.createBuffer();
      if (!vertexBuffer) {
        console.log('Failed to create the buffer object');
        return -1;
      }
  
      gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
      gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
  
      var aPosition = gl.getAttribLocation(program, 'aPosition');
      if (aPosition < 0) {
        console.log('Failed to get the storage location of aPosition');
        return -1;
      }
  
      gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0);
      gl.enableVertexAttribArray(aPosition);
      return n;
    }
  
    function drawLine2() {
      var n = initLine2Buffers();
      if (n < 0) {
        console.log('Failed to set the positions of the vertices');
        return;
      }
      gl.drawArrays(gl.LINES, 0, n);
    }
  
    function initLine2Buffers() {
      var vertices = new Float32Array([
        +0.185, -0.27, //atas ke kanan
        +0.185, -0.40,
        +0.185, -0.40, //kanan ke kiri
        +0.115, -0.40,
        +0.115, -0.40,
        +0.185, -0.27
      ]);
      var n = 6;
  
      var vertexBuffer = gl.createBuffer();
      if (!vertexBuffer) {
        console.log('Failed to create the buffer object');
        return -1;
      }
  
      gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
      gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
  
      var aPosition = gl.getAttribLocation(program, 'aPosition');
      if (aPosition < 0) {
        console.log('Failed to get the storage location of aPosition');
        return -1;
      }
  
      gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0);
      gl.enableVertexAttribArray(aPosition);
      return n;
    }

    function drawLine3() {
      var n = initLine3Buffers();
      if (n < 0) {
        console.log('Failed to set the positions of the vertices');
        return;
      }
      gl.drawArrays(gl.LINES, 0, n);
    }
  
    function initLine3Buffers() {
      var vertices = new Float32Array([
        -0.58, -0.42, //atas ke kanan
        -0.56, -0.35,
        -0.45, -0.46, //kanan ke kiri
        -0.47, -0.53
      ]);
      var n = 4;
  
      var vertexBuffer = gl.createBuffer();
      if (!vertexBuffer) {
        console.log('Failed to create the buffer object');
        return -1;
      }
  
      gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
      gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
  
      var aPosition = gl.getAttribLocation(program, 'aPosition');
      if (aPosition < 0) {
        console.log('Failed to get the storage location of aPosition');
        return -1;
      }
  
      gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0);
      gl.enableVertexAttribArray(aPosition);
      return n;
    }

    function drawLine4() {
      var n = initLine4Buffers();
      if (n < 0) {
        console.log('Failed to set the positions of the vertices');
        return;
      }
      gl.drawArrays(gl.LINE_LOOP, 0, n);
    }
  
    function initLine4Buffers() {
      // Create a buffer object
      var vertexBuffer = gl.createBuffer(),
          vertices = 1,
          vertCount = 2;
      for (var i=0.0; i<=190; i+=1) {
        // degrees to radians
        var j = i * Math.PI / 180;
        // X Y Z
        var vert1 = [
          Math.sin(j),
          Math.cos(j),
          // 0,
        ];
        // var vert2 = [
        //   0,
        //   0,
        //   // 0,
        // ];
        // DONUT:
        var vert2 = [
          Math.sin(j)*0.5,
          Math.cos(j)*0.5,
        ];
        vertices = vertices.concat(vert1);
        vertices = vertices.concat(vert2);
      }
      var n = vertices.length / vertCount;
      gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
  
      var aPosition = gl.getAttribLocation(program, 'aPosition');
      gl.enableVertexAttribArray(aPosition);
      gl.vertexAttribPointer(aPosition, vertCount, gl.FLOAT, false, 0, 0);
  
      return n;
    }

    function drawTriangle1() {
      var n = initTriangle1Buffers();
      if (n < 0) {
        console.log('Failed to set the positions of the vertices');
        return;
      }
      gl.drawArrays(gl.TRIANGLES, 0, n);
    }
  
    function initTriangle1Buffers() {
      var vertices = new Float32Array([
        0.115, -0.12,
        0.185, -0.25,
        0.115, -0.38
      ]);
      var n = 3;
  
      var vertexBuffer = gl.createBuffer();
      if (!vertexBuffer) {
        console.log('Failed to create the buffer object');
        return -1;
      }
  
      gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
      gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
  
      var aPosition = gl.getAttribLocation(program2, 'aPosition');
      if (aPosition < 0) {
        console.log('Failed to get the storage location of aPosition');
        return -1;
      }
  
      gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0);
      gl.enableVertexAttribArray(aPosition);
      return n;
    }

    function drawTriangle2() {
      var n = initTriangle2Buffers();
      if (n < 0) {
        console.log('Failed to set the positions of the vertices');
        return;
      }
      gl.drawArrays(gl.TRIANGLES, 0, n);
    }
  
    function initTriangle2Buffers() {
      var vertices = new Float32Array([
        0.185, -0.27,
        0.185, -0.40,
        0.115, -0.40
      ]);
      var n = 3;
  
      var vertexBuffer = gl.createBuffer();
      if (!vertexBuffer) {
        console.log('Failed to create the buffer object');
        return -1;
      }
  
      gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
      gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
  
      var aPosition = gl.getAttribLocation(program2, 'aPosition');
      if (aPosition < 0) {
        console.log('Failed to get the storage location of aPosition');
        return -1;
      }
  
      gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0);
      gl.enableVertexAttribArray(aPosition);
      return n;
    }

    function drawTriangle3() {
      var n = initTriangle3Buffers();
      if (n < 0) {
        console.log('Failed to set the positions of the vertices');
        return;
      }
      gl.drawArrays(gl.TRIANGLES, 0, n);
    }
  
    function initTriangle3Buffers() {
      var vertices = new Float32Array([
        0.185, +0.5,
        0.185, -0.23,
        0.115, -0.1
      ]);
      var n = 3;
  
      var vertexBuffer = gl.createBuffer();
      if (!vertexBuffer) {
        console.log('Failed to create the buffer object');
        return -1;
      }
  
      gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
      gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
  
      var aPosition = gl.getAttribLocation(program2, 'aPosition');
      if (aPosition < 0) {
        console.log('Failed to get the storage location of aPosition');
        return -1;
      }
  
      gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0);
      gl.enableVertexAttribArray(aPosition);
      return n;
    }
    
    function drawTriangle4() {
      var n = initTriangle4Buffers();
      if (n < 0) {
        console.log('Failed to set the positions of the vertices');
        return;
      }
      gl.drawArrays(gl.TRIANGLES, 0, n);
    }
  
    function initTriangle4Buffers() {
      var vertices = new Float32Array([
        0.115, +0.5,
        0.185, +0.5,
        0.115, -0.1
      ]);
      var n = 3;
  
      var vertexBuffer = gl.createBuffer();
      if (!vertexBuffer) {
        console.log('Failed to create the buffer object');
        return -1;
      }
  
      gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
      gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
  
      var aPosition = gl.getAttribLocation(program2, 'aPosition');
      if (aPosition < 0) {
        console.log('Failed to get the storage location of aPosition');
        return -1;
      }
  
      gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0);
      gl.enableVertexAttribArray(aPosition);
      return n;
    }

    function drawTriangle5() {
      var n = initTriangle5Buffers();
      if (n < 0) {
        console.log('Failed to set the positions of the vertices');
        return;
      }
      gl.drawArrays(gl.TRIANGLES, 0, n);
    }
  
    function initTriangle5Buffers() {
      var vertices = new Float32Array([
        0.115, +0.5,
        0.115, 0.22,
        -0.095, -0.6
      ]);
      var n = 3;
  
      var vertexBuffer = gl.createBuffer();
      if (!vertexBuffer) {
        console.log('Failed to create the buffer object');
        return -1;
      }
  
      gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
      gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
  
      var aPosition = gl.getAttribLocation(program2, 'aPosition');
      if (aPosition < 0) {
        console.log('Failed to get the storage location of aPosition');
        return -1;
      }
  
      gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0);
      gl.enableVertexAttribArray(aPosition);
      return n;
    }

    function drawTriangle6() {
      var n = initTriangle6Buffers();
      if (n < 0) {
        console.log('Failed to set the positions of the vertices');
        return;
      }
      gl.drawArrays(gl.TRIANGLES, 0, n);
    }
  
    function initTriangle6Buffers() {
      var vertices = new Float32Array([
        0.115, +0.5, 
        -0.095, -0.6,
        -0.185, -0.6
      ]);
      var n = 3;
  
      var vertexBuffer = gl.createBuffer();
      if (!vertexBuffer) {
        console.log('Failed to create the buffer object');
        return -1;
      }
  
      gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
      gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
  
      var aPosition = gl.getAttribLocation(program2, 'aPosition');
      if (aPosition < 0) {
        console.log('Failed to get the storage location of aPosition');
        return -1;
      }
  
      gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0);
      gl.enableVertexAttribArray(aPosition);
      return n;
    }

    function drawTriangle7() {
      var n = initTriangle7Buffers();
      if (n < 0) {
        console.log('Failed to set the positions of the vertices');
        return;
      }
      gl.drawArrays(gl.TRIANGLES, 0, n);
    }
  
    function initTriangle7Buffers() {
      var vertices = new Float32Array([
        0.005, -0.2,
        0.115, -0.2,
        0.115, -0.3
      ]);
      var n = 3;
  
      var vertexBuffer = gl.createBuffer();
      if (!vertexBuffer) {
        console.log('Failed to create the buffer object');
        return -1;
      }
  
      gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
      gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
  
      var aPosition = gl.getAttribLocation(program2, 'aPosition');
      if (aPosition < 0) {
        console.log('Failed to get the storage location of aPosition');
        return -1;
      }
  
      gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0);
      gl.enableVertexAttribArray(aPosition);
      return n;
    }

    function drawTriangle8() {
      var n = initTriangle8Buffers();
      if (n < 0) {
        console.log('Failed to set the positions of the vertices');
        return;
      }
      gl.drawArrays(gl.TRIANGLES, 0, n);
    }
  
    function initTriangle8Buffers() {
      var vertices = new Float32Array([
        0.005, -0.2,
        0.115, -0.3, 
        -0.025, -0.3
      ]);
      var n = 3;
  
      var vertexBuffer = gl.createBuffer();
      if (!vertexBuffer) {
        console.log('Failed to create the buffer object');
        return -1;
      }
  
      gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
      gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
  
      var aPosition = gl.getAttribLocation(program2, 'aPosition');
      if (aPosition < 0) {
        console.log('Failed to get the storage location of aPosition');
        return -1;
      }
  
      gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0);
      gl.enableVertexAttribArray(aPosition);
      return n;
    }

    function resizer() {
      /**
        * Callback for when the screen is resized
        **/
  
      // Scaling for a square!
      var width = canvas.getAttribute("width"), height = canvas.getAttribute("height");
      // Fullscreen if not set
      if (!width || width < 0) {
        canvas.width = window.innerWidth;
        gl.maxWidth = window.innerWidth;
      }
      if (!height || height < 0) {
        canvas.height = window.innerHeight;
        gl.maxHeight = window.innerHeight;
      }
  
      // scale down for smaller size
      var min = Math.min.apply( Math, [gl.maxWidth, gl.maxHeight, window.innerWidth, window.innerHeight]);
      canvas.width = min;
      canvas.height = min;
  
      // viewport!
      gl.viewport(0, 0, canvas.width, canvas.height);
  
      // redraw!
      draw();
    }
  
    // resize the canvas to fill browser window dynamically
    window.addEventListener('resize', resizer);
  
  })(window || this);
  