<template>
  <video ref="video" :poster="previewImageSrc" :controls="controls">
    <source :src="src" type="application/x-mpegURL" />
  </video>
</template>

<script setup lang="ts">
import { onMounted, onUpdated, ref } from "vue";
import Hls from "hls.js";

interface Props {
  src: string;
  previewImageSrc: string;
  muted: boolean;
  controls: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  src: "",
  previewImageSrc: "",
  muted: false,
  controls: true,
});

const video = ref(null);

onMounted(() => {
  prepareVideoPlayer();
});

onUpdated(() => {
  prepareVideoPlayer();
});

function prepareVideoPlayer() {
  const hls = new Hls();
  hls.loadSource(props.src);
  if (video.value) {
    hls.attachMedia(video.value);
    video.value.muted = props.muted;
  }
}
</script>
