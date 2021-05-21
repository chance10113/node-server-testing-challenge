const express = require("express");
const router = express.Router();

const Resource = require("./resource-model");

router.get("/", async (req, res, next) => {
  Resource.getResources()
    .then((resources) => {
      res.status(200).json(resources);
    })
    .catch(next);
});

router.get("/:id", async (req, res, next) => {
  try {
    const resource = await Resource.getById(req.params.id);
    if (!resource) {
      return res.status(404).json({
        message: "Resource not found",
      });
    } else {
      res.json(resource);
    }
  } catch (err) {
    next(err);
  }
});

router.post("/", (req, res, next) => {
  Resource.createResource(req.body)
    .then((resource) => {
      res.status(201).json(resource);
    })
    .catch(next);
});

router.delete("/:id", async (req, res, next) => {
  try {
    await Resource.deleteResource(req.params.id);
    res.status(200).end();
  } catch (err) {
    next(err);
  }
});

module.exports = router;
