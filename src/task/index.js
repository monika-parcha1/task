import { studentsData, minimumMarks } from "../utils/mockdata";

export const getBestThreeStudents = () => {
  const totalMarks = getTotalMarks(studentsData);
  return totalMarks.sort((a, b) => b.total - a.total).slice(0, 3);
};

export const getTotalMarks = (studentsData) => {
  const totalMarks = studentsData.map((data) => {
    const total = data.marks.reduce((acc, curr) => {
      return acc.marks > minimumMarks
        ? { marks: acc.marks + curr.marks }
        : { marks: curr.marks };
    });
    return {
      ...data,
      total: total.marks,
    };
  });
  return totalMarks;
};

export const getStudentStatus = (marks) => {
  const marksWithStatus = marks.map((data) => {
    return {
      ...data,
      status: data.marks > minimumMarks ? "Pass" : "Fail",
    };
  });

  return marksWithStatus;
};

export const getResultOfClass = (className) => {
  const totalMarks = getTotalMarks(studentsData);
  const result = totalMarks
    .filter((data) => {
      return data.class === className;
    })
    .map((data) => {
      const marksWithStatus = getStudentStatus(data.marks);
      return {
        ...data,
        marks: marksWithStatus,
      };
    });
  return result.sort((a, b) => b.total - a.total);
};
