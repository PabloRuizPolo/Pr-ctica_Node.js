const { Responder } = require("cote");
const jimp = require("jimp");
const path = require("node:path");

const responder = new Responder({ name: "thumbnail-maker" });

responder.on("make-thumbnail", async (req, done) => {
  const { url, name } = req;

  try {
    // Read the image.
    const image = await jimp.read(url);

    // Resize the image to 100x100.
    await image.resize(100, 100);
    const filename = `resize-${name}.jpg`;
    const resizedImagePath = path.join(
      __dirname,
      "../nodepop/public/productImage/",
      filename
    );
    // Save and overwrite the image
    await image.writeAsync(resizedImagePath);
  } catch (error) {
    console.error(error);
    done(error);
  }
  done(filename);
});
