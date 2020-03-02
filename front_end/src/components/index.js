/*
    The purpose of this file is to import all the files in the
    "components" directory and export all of the components. This
    allow us to import all these components easier from app.js by
    just pointing to the "components" directory.
    
    WITH this configuration:
        import { Header, Table, PieChart, BarChart, 
            LoadingAnimation, Counts } from "./components";
    
    WITHOUT this configuration:
        import { Header } from "./components/Header";
        import { Table } from "./components/Table";
        import { PieChart } from "./components/PieChart";
        import { BarChart } from "./components/BarChart";
        import { LoadingAnimation } from "./components/LoadingAnimation";
        import { Counts } from "./components/Counts";
*/

import Header from './Header';
import Table from './Table';
import PieChart from './PieChart';
import BarChart from './BarChart';
import LoadingAnimation from './LoadingAnimation';
import Counts from './Counts';

export {
    Header,
    Table,
    PieChart,
    BarChart,
    LoadingAnimation,
    Counts
}