import { client } from './client.js';

export default {
    name: 'Upload',
    data: () => ({
        files: [],
        torrents: [],
    }),
    methods: {
        upload(event) {
            console.dir(event.target.files);
            this.files = Array.from(event.target.files);
            this.files.forEach((file, i) => {
                client.seed(file, (torrent) => {
                    console.log('Client is seeding %o', torrent);
                    this.torrents[i] = torrent;
                });
            });
        },
        copy(event) {
            event.target.select();
            event.target.setSelectionRange(0, 99999);
            navigator.clipboard.writeText(event.target.value);
        },
    },
};
