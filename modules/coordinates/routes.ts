// src/modules/coordinates/routes.ts
import moment from "moment";
import { Repository, Raw, Like } from "typeorm";
import { paginationWrapBuild, paginationWrapQueryBuild } from "../../global/schema/pagination";
import { Coordinates } from "./entity"
import { coordinatesSchema } from "./schema";

export default async (server, options, next) => {
  server.get("", {
    schema: coordinatesSchema, preValidation: [
      server.validDate
    ],
  },
    async (req, res) => {
      req.log.info(`list coordinates from db`);

      const vehicleId = (req?.query?.vehicleId ?? '') !== '' ? req?.query?.vehicleId : null;
      const start = (req?.query?.start ?? '') !== '' ? moment(req?.query?.start) : null;
      const end = (req?.query?.end ?? '') !== '' ? moment(req?.query?.end) : null;


      const pagingResult = await paginationWrapBuild<Coordinates>(req, server.db.coordinates,
        {
          ...(vehicleId ? {vehicleId: Like(vehicleId)} : {}),
          ...((start && end) ? {
            created_at: Raw(alias => `${alias} >= '${start.format("YYYY-MM-DD 00:00:00")}' and ${alias} <= '${end.format("YYYY-MM-DD 23:59:59")}'`)
          } : {})
        },
        {
          id: "ASC"
        }
      )

      res.send(pagingResult);
    }
  );

  next()
}