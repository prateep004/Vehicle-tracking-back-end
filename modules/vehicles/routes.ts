// src/modules/vehicles/routes.ts
import { Repository } from "typeorm";
import { paginationWrapBuild, paginationWrapQueryBuild } from "../../global/schema/pagination";
import { Vehicles } from "./entity"
import { vehicleSchema } from "./schema";

export default async (server, options, next) => {
  server.get("", {
    schema: vehicleSchema
  },
    async (req, res) => {
      req.log.info(`list vehicles from db`);

      const pagingResult = await paginationWrapBuild<Vehicles>(req, server.db.vehicles,
        {},
        { id: "ASC" }
        )

      res.send(pagingResult);
    }
  );

  next()
}