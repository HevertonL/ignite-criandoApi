import { parse as csvParse } from "csv-parse";
import fs from "fs";

import { CategoryRepository } from "../../repositories/implementation/CategoryRepository";

class ImportCategoryUseCase {
  constructor(private categoriesRepository: CategoryRepository) {}

  execute(file: Express.Multer.File): void {
    const stream = fs.createReadStream(file.path);

    const parseFile = csvParse();

    stream.pipe(parseFile);

    parseFile.on("data", async (line) => {
      console.log(line);
    });
  }
}

export { ImportCategoryUseCase };
