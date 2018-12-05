import * as bcryptjs from "bcryptjs";
import sha256 from "../utils/sha256";

import { getRepository } from "typeorm";

import { Organization } from "../types/Organization";
import { Project } from "../types/Project";
import { User } from "../types/User";

export async function seedDatabase() {
  const organizationRepository = getRepository(Organization);
  const projectRepository = getRepository(Project);
  const userRepository = getRepository(User);

  const password = await bcryptjs.hash(sha256("password"), 10);

  const organizations = organizationRepository.create([
    {
      name: "Useful IO",
    },
    {
      name: "Intellipse",
    },
  ]);
  await organizationRepository.save(organizations);

  const users = userRepository.create([
    {
      firstName: "Łukasz",
      lastName: "Jagodziński",
      email: "luke.jagodzinski@gmail.com",
      password,
      roles: ["admin"],
      organization: organizations[0],
    },
    {
      firstName: "Monika",
      lastName: "Jagodzińska",
      email: "monika.sedzicka@gmail.com",
      password,
      roles: [],
      organization: organizations[1],
    },
  ]);
  await userRepository.save(users);

  const projects = projectRepository.create([
    {
      name: "First Project",
      user: users[0],
    },
    {
      name: "Second Project",
      user: users[0],
    },
    {
      name: "My First Project",
      user: users[1],
    },
  ]);
  await projectRepository.save(projects);
}
