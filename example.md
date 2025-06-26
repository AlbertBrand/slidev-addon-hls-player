---
layout: center
---

# Integration of HLS video player with Slidev

---

# Add a HLS video player to your slides

<hls-player class="w-100 h-3/4" src="https://v.redd.it/4x9g56xll33f1/HLSPlaylist.m3u8?a=1750948553%2CZDliOTA5N2I5NzQ5NGRmYTcwOTExN2ZkMmNiNzk0ZTg0YjMyNWQzNGY3MjZkZDU1YTQwMTU2YjAwOGM4MzY3Yw%3D%3D&amp;v=1&amp;f=sd"/>

---

# Set preview image

<hls-player class="w-100 h-3/4" src="https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"
previewImageSrc="https://peach.blender.org/wp-content/uploads/evil-frank.png"/>

---

Enable mute

<hls-player class="w-100 h-3/4" src="https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"
:muted="true"/>

---

Enable autoplay

<hls-player class="w-100 h-3/4" src="https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"
:autoplay="true"/>

---

Enable loop

<hls-player class="w-100 h-3/4" src="https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"
:loop="true"/>

---

# See the source code

[slidev-addon-hls-player](https://github.com/AlbertBrand/slidev-addon-hls-player)
