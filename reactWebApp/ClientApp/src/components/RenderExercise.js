import React, { Component, useState, useEffect } from 'react';

export const RenderExercise = () => {

    const [exercises, setExercises] = useState([])
    const exerciseType = 1

    useEffect(() => {
        fetch(`/render-exercise`).then((result) => {
            console.log(result, 'RESULT')
            return result.json;
        }).then((data) => {
            console.log(data, 'DATAAAAA')
            setExercises(data);
            console.log(exercises, "Exercises array response")
        })
    }, []);


    return (
        <main>
            {
                exercises.map((exercise) => <p>{exercise.Name}</p>)
            }
        </main>
    )

}
