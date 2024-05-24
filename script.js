document.addEventListener('DOMContentLoaded', function() {
    const logWorkoutForm = document.getElementById('log-workout-form');
    const recentWorkoutsList = document.getElementById('recent-workouts');
  
    logWorkoutForm.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const exercise = document.getElementById('exercise').value;
      const duration = document.getElementById('duration').value;
      const intensity = document.getElementById('intensity').value;
  
      logWorkout(exercise, duration, intensity);
      logWorkoutForm.reset();
    });
  
    function logWorkout(exercise, duration, intensity) {
      const workoutItem = document.createElement('li');
      workoutItem.textContent = `${exercise} - ${duration} minutes - ${intensity} intensity`;
      recentWorkoutsList.prepend(workoutItem);
    }
  });