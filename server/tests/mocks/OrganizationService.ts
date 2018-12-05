import { Organization } from "../../src/types/Organization";
import { OrganizationService as OrganizationServiceParent } from "../../src/services/OrganizationService";

export class OrganizationService extends OrganizationServiceParent {
  constructor(private readonly organizations: Organization[]) {
    super();
  }

  async findOneById(organizationId: number): Promise<Organization> {
    return this.organizations.find(
      organization => organization.id === organizationId,
    );
  }
}
