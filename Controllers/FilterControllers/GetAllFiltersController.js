const Branch = require('../../Models/Branch')
const { responseMessage } = require('../../Helpers')

async function GetAllFiltersController(req, res) {
  try {
    const filters = await Branch.find({});

    if (!filters) {
      return responseMessage(res, 200, true, "No available filters", { filters: [] })
    }
    else {
      return responseMessage(res, 200, true, "available filters", { filters: filters })
    }

  } catch (error) {
    console.log(error);
    return responseMessage(res, 500, false, "Error getting all filters", {})
  }
}

module.exports = GetAllFiltersController;