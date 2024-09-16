import { eq } from 'drizzle-orm'
import { db } from '@/db'
import { goals } from '@/db/schema'

interface deleteGoalRequest {
  goalId: string
}

export async function deleteGoal({ goalId }: deleteGoalRequest) {
  const deleteResult = await db
    .delete(goals)
    .where(eq(goals.id, goalId))
    .returning()

  const goalCompletion = deleteResult[0]

  return {
    goalCompletion,
  }
}