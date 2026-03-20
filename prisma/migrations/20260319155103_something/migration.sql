-- CreateTable
CREATE TABLE "student_tb" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "student_tb_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "student_tb_id_key" ON "student_tb"("id");

-- CreateIndex
CREATE UNIQUE INDEX "student_tb_email_key" ON "student_tb"("email");
