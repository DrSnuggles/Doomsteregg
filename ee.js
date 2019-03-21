/* Doomsteregg by DrSnuggles */

"use strict";

(function () {
  var CDN = "//cdn.jsdelivr.net/gh/DrSnuggles/Doomsteregg/";

  // load additional scripts and play
  addScript(CDN+"scriptprocessor_player.min.js", function(){
    addScript(CDN+"backend_vgm.js", function(){
      play();
    });
  });

  function addScript(src, cb){
    var script = document.createElement("script");
    script.onload = function(){
      cb();
    };
    script.src = src;
    document.head.appendChild(script);
  };

  function play() {
    ScriptNodePlayer.createInstance(new VgmBackendAdapter(), "", [], false, function(){}, function(){}, function(){ScriptNodePlayer.getInstance().loadMusicDataFromCache(CDN+"Doom.vgz", {}, function(){});}); // backendAdapter, basePath, requiredFiles, enableSpectrum, onPlayerReady, onTrackReadyToPlay, onTrackEnd, doOnUpdate, externalTicker
    ScriptNodePlayer.getInstance().loadMusicFromURL(CDN+"Doom.vgz", {}, function(){}, function(){}, function(){}); // url, options, onCompletion, onFail, onProgress
  };

})();
