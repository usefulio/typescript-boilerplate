import { Repository, getRepository } from "typeorm";
import { InjectRepository } from "typeorm-typedi-extensions";

import { Organization } from "../types/Organization";

export class OrganizationService {
  @InjectRepository(Organization)
  private readonly organizationRepository: Repository<Organization>;

  findOneById(organizationId: number): Promise<Organization> {
    return this.organizationRepository.findOne(organizationId);
  }
}
