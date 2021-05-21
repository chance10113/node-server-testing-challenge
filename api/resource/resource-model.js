const db = require("../../data/dbConfig");

function getResources() {
  return db("resources");
}

function getById(resource_id) {
  return db("resources").where({ resource_id }).first();
}

async function createResource(resource) {
  const [resource_id] = await db("resources").insert(resource);
  return getResources().where({ resource_id }).first();
}

async function updateResource(resource_id, data) {
	await db("resources").where({ resource_id }).update(data)
	return getById(resource_id)
}

function deleteResource(resource_id) {
  return db('resources').where({ resource_id }).del();
}

module.exports = {
  getResources,
  getById,
  createResource,
  updateResource,
  deleteResource
};
