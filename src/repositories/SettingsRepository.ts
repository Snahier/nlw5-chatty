import { EntityRepository, Repository } from "typeorm"
import { Setting } from "../entities/Setting"

@EntityRepository()
export class SettingsRepository extends Repository<Setting> {}
