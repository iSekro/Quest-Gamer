import { PrismaClient, QuestionDifficulty, QuestionStatus } from "@prisma/client";
import crypto from "crypto";
import sampleQuestions from "../seed/sample-questions.json";

const prisma = new PrismaClient();

function hashAnswer(answer: string) {
  return crypto.createHash("sha256").update(answer.trim().toLowerCase()).digest("hex");
}

async function main() {
  const season = await prisma.season.upsert({
    where: { id: "season_dev_001" },
    update: { isActive: true },
    create: {
      id: "season_dev_001",
      name: "Temporada Dev 1",
      startsAt: new Date(),
      endsAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30),
      isActive: true,
    },
  });

  const categoryNames = [
    "Gaming general",
    "Historia de videojuegos",
    "Nintendo",
    "PlayStation",
    "Xbox",
    "PC Gaming",
    "League of Legends",
    "RPG",
    "Soulslike",
    "Esports",
    "Hardware gamer",
    "Cultura gamer",
  ];

  for (const name of categoryNames) {
    await prisma.category.upsert({
      where: { slug: name.toLowerCase().replaceAll(" ", "-") },
      update: {},
      create: {
        name,
        slug: name.toLowerCase().replaceAll(" ", "-"),
      },
    });
  }

  for (const item of sampleQuestions as Array<any>) {
    const category = await prisma.category.findUniqueOrThrow({
      where: { slug: item.category.toLowerCase().replaceAll(" ", "-") },
    });

    const fact = await prisma.fact.create({
      data: {
        categoryId: category.id,
        entity: item.entity,
        property: item.property,
        value: item.value,
        source: item.source,
        confidence: 80,
      },
    });

    await prisma.question.create({
      data: {
        factId: fact.id,
        categoryId: category.id,
        difficultyLabel: item.difficulty as QuestionDifficulty,
        difficultyScore: 0.3,
        questionType: "MULTIPLE_CHOICE",
        questionText: item.questionText,
        answerOptionsJson: item.answerOptions,
        correctAnswerHash: hashAnswer(item.correctAnswer),
        explanation: item.explanation,
        status: QuestionStatus.PUBLISHED,
      },
    });
  }

  console.log(`Seed complete for ${season.name}`);
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
