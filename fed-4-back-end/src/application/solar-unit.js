import { solarUnits } from "../infrastructure/data.js";
import { v4 as uuidv4 } from "uuid";
import { SolarUnit } from "../infrastructure/entities/SolarUnit.js";

export const getAllSolarUnits = async (req, res) => {
  try {
    const solarUnits = await SolarUnit.find();
    res.status(200).json(solarUnits);
  } catch (error) {
    console.error("Error fetching solar units:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const createSolarUnit = async (req, res) => {
  try {
    const { serialNumber, installationDate, capacity, status } = req.body;

    const newSolarUnit = {
      serialNumber,
      installationDate,
      capacity,
      status,
    };

    const createdSolarUnit = await SolarUnit.create(newSolarUnit);

    res.status(201).json(createdSolarUnit);
  } catch (error) {
    console.error("Error creating solar unit:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getSolarUnitById = async (req, res) => {
  try {
    const { id } = req.params;
    const solarUnit = await SolarUnit.findById(id);

    if (!solarUnit) {
      return res.status(404).json({ message: "Solar unit not found" });
    }

    res.status(200).json(solarUnit);
  } catch (error) {
    console.error("Error fetching solar unit:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const updateSolarUnitById = async (req, res) => {
  try {
    const { id } = req.params;
    const { serialNumber, installationDate, capacity, status } = req.body;
    const solarUnit = await SolarUnit.findById(id);

    if (!solarUnit) {
      return res.status(404).json({ message: "Solar unit not found" });
    }

    const updateSolarUnit = await SolarUnit.findByIdAndUpdate(id, {
      serialNumber,
      installationDate,
      capacity,
      status,
    });

    res.status(200).json(updateSolarUnit);
  } catch (error) {
    console.error("Error updating solar unit:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const deleteSolarUnitById = async (req, res) => {
  try {
    const { id } = req.params;
    const solarUnit = await SolarUnit.findById(id);

    if (!solarUnit) {
      return res.status(404).json({ message: "Solar unit not found" });
    }

    await SolarUnit.findByIdAndDelete(id);
    res.status(204).send();
    
  } catch (error) {
    console.error("Error deleting solar unit:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
