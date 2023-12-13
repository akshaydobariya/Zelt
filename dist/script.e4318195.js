// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"mpVp":[function(require,module,exports) {
function loco() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  var locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop: function scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    },
    // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect: function getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });
  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", function () {
    return locoScroll.update();
  });

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}
loco();
var canvas = document.querySelector("canvas");
var context = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});
function files(index) {
  var data = "\n  https://zelt.app/assets/img/home/hero/sequence/1.webp\nhttps://zelt.app/assets/img/home/hero/sequence/2.webp\nhttps://zelt.app/assets/img/home/hero/sequence/3.webp\nhttps://zelt.app/assets/img/home/hero/sequence/4.webp\nhttps://zelt.app/assets/img/home/hero/sequence/5.webp\nhttps://zelt.app/assets/img/home/hero/sequence/6.webp\nhttps://zelt.app/assets/img/home/hero/sequence/7.webp\nhttps://zelt.app/assets/img/home/hero/sequence/8.webp\nhttps://zelt.app/assets/img/home/hero/sequence/9.webp\nhttps://zelt.app/assets/img/home/hero/sequence/10.webp\nhttps://zelt.app/assets/img/home/hero/sequence/11.webp\nhttps://zelt.app/assets/img/home/hero/sequence/12.webp\nhttps://zelt.app/assets/img/home/hero/sequence/13.webp\nhttps://zelt.app/assets/img/home/hero/sequence/14.webp\nhttps://zelt.app/assets/img/home/hero/sequence/15.webp\nhttps://zelt.app/assets/img/home/hero/sequence/16.webp\nhttps://zelt.app/assets/img/home/hero/sequence/17.webp\nhttps://zelt.app/assets/img/home/hero/sequence/18.webp\nhttps://zelt.app/assets/img/home/hero/sequence/19.webp\nhttps://zelt.app/assets/img/home/hero/sequence/20.webp\nhttps://zelt.app/assets/img/home/hero/sequence/21.webp\nhttps://zelt.app/assets/img/home/hero/sequence/22.webp\nhttps://zelt.app/assets/img/home/hero/sequence/23.webp\nhttps://zelt.app/assets/img/home/hero/sequence/24.webp\nhttps://zelt.app/assets/img/home/hero/sequence/25.webp\nhttps://zelt.app/assets/img/home/hero/sequence/26.webp\nhttps://zelt.app/assets/img/home/hero/sequence/27.webp\nhttps://zelt.app/assets/img/home/hero/sequence/28.webp\nhttps://zelt.app/assets/img/home/hero/sequence/29.webp\nhttps://zelt.app/assets/img/home/hero/sequence/30.webp\nhttps://zelt.app/assets/img/home/hero/sequence/31.webp\nhttps://zelt.app/assets/img/home/hero/sequence/32.webp\nhttps://zelt.app/assets/img/home/hero/sequence/33.webp\nhttps://zelt.app/assets/img/home/hero/sequence/34.webp\nhttps://zelt.app/assets/img/home/hero/sequence/35.webp\nhttps://zelt.app/assets/img/home/hero/sequence/36.webp\nhttps://zelt.app/assets/img/home/hero/sequence/37.webp\nhttps://zelt.app/assets/img/home/hero/sequence/38.webp\nhttps://zelt.app/assets/img/home/hero/sequence/39.webp\nhttps://zelt.app/assets/img/home/hero/sequence/40.webp\nhttps://zelt.app/assets/img/home/hero/sequence/41.webp\nhttps://zelt.app/assets/img/home/hero/sequence/42.webp\nhttps://zelt.app/assets/img/home/hero/sequence/43.webp\nhttps://zelt.app/assets/img/home/hero/sequence/44.webp\nhttps://zelt.app/assets/img/home/hero/sequence/45.webp\nhttps://zelt.app/assets/img/home/hero/sequence/46.webp\nhttps://zelt.app/assets/img/home/hero/sequence/47.webp\nhttps://zelt.app/assets/img/home/hero/sequence/48.webp\nhttps://zelt.app/assets/img/home/hero/sequence/49.webp\nhttps://zelt.app/assets/img/home/hero/sequence/50.webp\nhttps://zelt.app/assets/img/home/hero/sequence/51.webp\nhttps://zelt.app/assets/img/home/hero/sequence/52.webp\nhttps://zelt.app/assets/img/home/hero/sequence/53.webp\nhttps://zelt.app/assets/img/home/hero/sequence/54.webp\nhttps://zelt.app/assets/img/home/hero/sequence/55.webp\nhttps://zelt.app/assets/img/home/hero/sequence/56.webp\nhttps://zelt.app/assets/img/home/hero/sequence/57.webp\nhttps://zelt.app/assets/img/home/hero/sequence/58.webp\nhttps://zelt.app/assets/img/home/hero/sequence/59.webp\nhttps://zelt.app/assets/img/home/hero/sequence/60.webp\nhttps://zelt.app/assets/img/home/hero/sequence/61.webp\nhttps://zelt.app/assets/img/home/hero/sequence/62.webp\nhttps://zelt.app/assets/img/home/hero/sequence/63.webp\nhttps://zelt.app/assets/img/home/hero/sequence/64.webp\nhttps://zelt.app/assets/img/home/hero/sequence/65.webp\nhttps://zelt.app/assets/img/home/hero/sequence/66.webp\nhttps://zelt.app/assets/img/home/hero/sequence/67.webp\nhttps://zelt.app/assets/img/home/hero/sequence/68.webp\nhttps://zelt.app/assets/img/home/hero/sequence/69.webp\nhttps://zelt.app/assets/img/home/hero/sequence/70.webp\nhttps://zelt.app/assets/img/home/hero/sequence/71.webp\nhttps://zelt.app/assets/img/home/hero/sequence/72.webp\nhttps://zelt.app/assets/img/home/hero/sequence/73.webp\nhttps://zelt.app/assets/img/home/hero/sequence/74.webp\nhttps://zelt.app/assets/img/home/hero/sequence/75.webp\nhttps://zelt.app/assets/img/home/hero/sequence/76.webp\nhttps://zelt.app/assets/img/home/hero/sequence/77.webp\nhttps://zelt.app/assets/img/home/hero/sequence/78.webp\nhttps://zelt.app/assets/img/home/hero/sequence/79.webp\nhttps://zelt.app/assets/img/home/hero/sequence/80.webp\nhttps://zelt.app/assets/img/home/hero/sequence/81.webp\nhttps://zelt.app/assets/img/home/hero/sequence/82.webp\nhttps://zelt.app/assets/img/home/hero/sequence/83.webp\nhttps://zelt.app/assets/img/home/hero/sequence/84.webp\nhttps://zelt.app/assets/img/home/hero/sequence/85.webp\nhttps://zelt.app/assets/img/home/hero/sequence/86.webp\nhttps://zelt.app/assets/img/home/hero/sequence/87.webp\nhttps://zelt.app/assets/img/home/hero/sequence/88.webp\nhttps://zelt.app/assets/img/home/hero/sequence/89.webp\nhttps://zelt.app/assets/img/home/hero/sequence/90.webp\nhttps://zelt.app/assets/img/home/hero/sequence/91.webp\nhttps://zelt.app/assets/img/home/hero/sequence/92.webp\nhttps://zelt.app/assets/img/home/hero/sequence/93.webp\nhttps://zelt.app/assets/img/home/hero/sequence/94.webp\nhttps://zelt.app/assets/img/home/hero/sequence/95.webp\nhttps://zelt.app/assets/img/home/hero/sequence/96.webp\nhttps://zelt.app/assets/img/home/hero/sequence/97.webp\nhttps://zelt.app/assets/img/home/hero/sequence/98.webp\nhttps://zelt.app/assets/img/home/hero/sequence/99.webp\nhttps://zelt.app/assets/img/home/hero/sequence/100.webp\nhttps://zelt.app/assets/img/home/hero/sequence/101.webp\nhttps://zelt.app/assets/img/home/hero/sequence/102.webp\nhttps://zelt.app/assets/img/home/hero/sequence/103.webp\nhttps://zelt.app/assets/img/home/hero/sequence/104.webp\nhttps://zelt.app/assets/img/home/hero/sequence/105.webp\nhttps://zelt.app/assets/img/home/hero/sequence/106.webp\nhttps://zelt.app/assets/img/home/hero/sequence/107.webp\nhttps://zelt.app/assets/img/home/hero/sequence/108.webp\nhttps://zelt.app/assets/img/home/hero/sequence/109.webp\nhttps://zelt.app/assets/img/home/hero/sequence/110.webp\nhttps://zelt.app/assets/img/home/hero/sequence/111.webp\nhttps://zelt.app/assets/img/home/hero/sequence/112.webp\nhttps://zelt.app/assets/img/home/hero/sequence/113.webp\nhttps://zelt.app/assets/img/home/hero/sequence/114.webp\nhttps://zelt.app/assets/img/home/hero/sequence/115.webp\nhttps://zelt.app/assets/img/home/hero/sequence/116.webp\nhttps://zelt.app/assets/img/home/hero/sequence/117.webp\nhttps://zelt.app/assets/img/home/hero/sequence/118.webp\n ";
  return data.split("\n")[index];
}
var frameCount = 118;
var images = [];
var imageSeq = {
  frame: 1
};
for (var i = 0; i < frameCount; i++) {
  var img = new Image();
  img.src = files(i);
  images.push(img);
}
gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: "none",
  scrollTrigger: {
    scrub: 0.15,
    trigger: "#page>canvas",
    start: "top top",
    end: "300% top",
    scroller: "#main"
  },
  onUpdate: render
});
images[1].onload = render;
function render() {
  scaleImage(images[imageSeq.frame], context);
}
function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(img, 0, 0, img.width, img.height, centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
}
ScrollTrigger.create({
  trigger: "#page>canvas",
  pin: true,
  // markers:true,
  scroller: "#main",
  start: "top top",
  end: "300% top"
});
},{}]},{},["mpVp"], null)
//# sourceMappingURL=/script.e4318195.js.map