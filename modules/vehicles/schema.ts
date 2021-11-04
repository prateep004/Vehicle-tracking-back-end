import { entitiesWrapSchema } from "../../global/schema/entities"
import { queryParamsSchema } from "../../global/schema/query_params"


export const itemVehiclesSchema = {
    id: { type: "number" },
    vehicleId: { type: "string" },
    vehicleNm: { type: "string" },
    created_at: { type: "string", format: "date" },
    updated_at: { type: "string", format: "date" },
}

export const vehicleSchema = {
    summary: "vehicles",
    description: "vehicles",
    tags: ["vehicles"],
    querystring: {
        type: 'object',
        properties: {
            ...queryParamsSchema
        }
    }, response: {
        200: {
            type: "object",
            properties: entitiesWrapSchema(itemVehiclesSchema)
        }
    }
}