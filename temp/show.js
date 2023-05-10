const router = (e = require("express").Router());
const File = require("../modules/file");
router.get("/:uuid", async (req, res) => {
  try {
    const file = await File.findOne({ uuid: req.params.uuid });
    
    if (!file) {
      return res.render("download", { error: "link is not found" });
    }
    return res.render("download", {
      uuid: file.uuid,
      fileName: file. path,
      fileSize: file.size,
      downloadLink: `${process.env.App_BASE_URL}/files/download/${file.uuid}`,
    });
  } catch (err) {
    return res.render("download", { error: "something went wrong.." });
  }
});

module.exports = router;
