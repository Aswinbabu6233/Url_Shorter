
import shortid from 'shortid';
import Url from '../model/urlshort.js';

export const Shorturl = async (req, res) => {
    try {
        const { originalUrl } = req.body;
        const shortcode = shortid.generate();
        const shorturl = `${req.protocol}://${req.get("host")}/${shortcode}`;

        const newurl = new Url({originalUrl,shortcode,shorturl});
        await newurl.save();
        res.json(newurl);
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
};

export const geturl = async (req, res) => {
    try {
        const { shortcode } = req.params;
        const urlEntry = await Url.findOne({ shortcode });

        if (urlEntry) {
            urlEntry.visits += 1;
            await urlEntry.save();
            return res.redirect(urlEntry.originalUrl); // redirect works
        } else {
            return res.status(404).send("URL not found");
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};
