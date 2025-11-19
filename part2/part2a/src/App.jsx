import Courses from './components/Courses'

const App = ({ courses }) => {
  return (
    <div>
      <ul>
        {courses.map(course =>
          <Courses key={course.id} course={course} />
        )}
      </ul>
    </div>
  )
}

export default App