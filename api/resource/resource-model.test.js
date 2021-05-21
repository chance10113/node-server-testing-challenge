const Resource = require("./resource-model");
const db = require("../../data/dbConfig");
const supertest = require("supertest")
const server = require("../server")

beforeAll(async () => {
  await db.migrate.rollback();
  await db.migrate.latest();
});
beforeEach(async () => {
  await db("resources").truncate();
});
afterAll(async () => {
  await db.destroy();
});

describe("Resources", () => {
  describe("sanity", () => {
    test("Resource is defined", () => {
      expect(Resource).toBeDefined();
    });
    test("Environment is correct", () => {
      expect(process.env.DB_ENV).toBe("testing");
    });
  });

  describe("getResources()", () => {
    it("resolves to list of resources", async () => {
      let resources = await Resource.getResources();
      expect(resources).toHaveLength(0);
      await db("resources").insert({ resource_name: "Wrench" });
      resources = await Resource.getResources();
      expect(resources).toHaveLength(1);
      await db("resources").insert({ resource_name: "BlowTorch" });
      resources = await Resource.getResources();
      expect(resources).toHaveLength(2);
    });
    it("resolves to resources of the correct shape", async () => {
      await db("resources").insert({ resource_name: "Wrench" });
      let resources = await Resource.getResources();
      expect(resources).toMatchObject([{ resource_name: "Wrench" }]);
    });
  });

  describe("getById",  () => {
    it("Is Defined",  () => {
      const resources =  Resource.getById("/2");
      expect(resources).toBeDefined();
      expect(resources).not.toBeUndefined();
    });
  });

  describe("createResource", () => {
    it('inserts resource', async () => {
        await Resource.createResource({ resource_name: "flipper" })
        const resources = await db('resources')
        expect(resources).toHaveLength(1)
        expect(resources[0]).toMatchObject({ resource_name: "flipper" })
      })
      it('resolves to the inserted resource', async () => {
        const result = await Resource.createResource({ resource_name: "flipper" })
        expect(result).toMatchObject({ resource_id: 1, resource_name: 'flipper' })
      })
  })

  describe("deleteResource", () => {
    it("deletes a character", async () => {
        // await Resource.createResource({ resource_name: "flipper" })
        // await Resource.createResource({ resource_name: "spatula" })
        // await Resource.createResource({ resource_name: "tub bung" })
		// await Resource.deleteResource("/1")
        // const resources = await db('resources')
        // expect(resources).toHaveLength(2)
	})
  })
});
