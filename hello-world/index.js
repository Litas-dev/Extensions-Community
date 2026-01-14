(function(){
  const n="Hello World";
  const v="1.0.0";
  if(typeof console!=="undefined"){
    console.log("["+n+"] loaded v"+v);
  }
  const onLoad=function(ctx){
    if(typeof console!=="undefined"){
      console.log("["+n+"] onLoad");
    }
  };
  const onUnload=function(ctx){
    if(typeof console!=="undefined"){
      console.log("["+n+"] onUnload");
    }
  };
  if(typeof window!=="undefined"){
    window.__RelictumExtension={onLoad,onUnload};
  }
})();
