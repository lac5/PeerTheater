<template>
  <h1>Upload</h1>
  <input type="file" @change="upload" />
  <div v-for="(torrent, index) in torrents" :key="index">
    <input type="text" @click="copy" v-bind:value="torrent.magnetURI" />
  </div>
</template>

<script src="../scripts/Upload.js"></script>
