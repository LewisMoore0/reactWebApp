using System;
using Microsoft.AspNetCore.Mvc;
using reactWebApp.Models;

namespace reactWebApp.Controllers
{
	[ApiController]
	[Route("[controller]")]
	public class ExerciseController : ControllerBase
	{
		
		private static readonly IEnumerable<ExerciseModel> Exercises = new[]
		{
			new ExerciseModel{ Id = 1, Name ="Max Hangs", Sets = 6, Reps = 1, ExerciseClass = 1},
            new ExerciseModel{ Id = 2, Name ="Repeaters", Sets = 6, Reps = 6, ExerciseClass = 1},
			new ExerciseModel{ Id = 3, Name="PullUps", Sets = 5, Reps = 5, ExerciseClass = 2}
        };

		[HttpGet]
		public ExerciseModel[] Get()
		{
			ExerciseModel[] exercises = Exercises.Where(i => i == i).ToArray();
			return exercises;
		}
	}
}

