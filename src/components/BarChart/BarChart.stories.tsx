import React from "react";
import { BarChart as Chart } from "./index";

const BarChartStory = {
    title: "BarChart",
    component: Chart,
};

const departments = [
    {
        id: 11568,
        name: 'Героев Труда ул., 39',
        city: 'Усть-Илимск',
        organisation: 'Почта России',
        plan_fact: 0,
        plan_count: 1,
        plan_date: 'Февраль',
        exists: 1,
        registered_operators: [],
        unregistered_operators: [
            1234,
            123456
        ]
    },
    {
        id: 1946,
        name: '50 лет ВЛКСМ ул., 16',
        city: 'Усть-Илимск',
        organisation: 'Почта России',
        plan_fact: 0,
        plan_count: 1,
        plan_date: 'Февраль',
        exists: 1,
        registered_operators: [],
        unregistered_operators: [
            123,
            1234,
            12345
        ]
    }
];


const data = departments.reduce<any []>((acc, cur) => {

    acc.push({
        name: cur.name,
        type: 'Зарегистрированные',
        value: cur.registered_operators.length,
    })

    acc.push({
        name: cur.name,
        type: 'Незарегистрированные',
        value: cur.unregistered_operators.length,
    })

    return acc;
}, []);


export const BarChart = () => <Chart data={data} height={300}/>;

export default BarChartStory;
