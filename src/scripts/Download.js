import { client } from './client.js';

export default {
    name: "HelloWorld",
    data: () => ({
        torrentId: null,
    }),
    methods: {
        download() {
            console.log(this.torrentId);
            if (!this.torrentId) return alert('No torrent');
            let handler = (torrent) => {
                var file = torrent.files.find((file) => {
                    return file.name.endsWith('.mp4');
                });
                file.appendTo('body');
            };
            let torrent = client.get(this.torrentId);
            if (!torrent) {
                client.add(this.torrentId, handler);
            } else {
                handler(torrent);
            }
        },
    },
};
