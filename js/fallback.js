function fallback(video)
{
  var img = video.querySelector('img');
  if (img)
    video.parentNode.replaceChild(img, video);
}
