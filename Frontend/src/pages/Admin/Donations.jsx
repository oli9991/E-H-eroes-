import { collection, doc, getDoc, getDocs, onSnapshot, orderBy, query, where } from "firebase/firestore";
import React, { useMemo, useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import Button from "../../components/Button";
import Table from "../../components/Table";
import { prettyDate } from "../../functions";
import AdminLayout from "../../utils/AdminLayout";
import { auth, db } from "../../utils/AuthWrapper";
import { jsPDF } from "jspdf";
import { html } from "../../document";

const Donations = () => {
    const user = auth.currentUser;
    const [donations, setList] = useState([]);


    const handleDownload = (v) => {
        const object = v.cell.row.original;
        const doc = new jsPDF('p', 'px', 'a4');
        console.log(html(object));
        doc.setLineWidth(1000);
        doc.setFont("Courier");
        doc.setFontSize(14);
        doc.html(html(object), {
            callback: (doc) => {
                doc.save('cerere.pdf');
            },
            html2canvas: { scale: 0.5 },
            width: 800, // <- here
            windowWidth: 800, // <- here,
            margin: 24,
            fontFaces: [{ family: 'Quicksand' }]
        })
    }

    const getAnnouncement = async (id) => {
        if (id) {
            const announcement = doc(db, "announcements", id);
            const docSnap = await getDoc(announcement);
            return docSnap.data()

        }
        return null;
    };


    useEffect(() => {
        const donationsRef = query(collection(db, 'donations'), orderBy('fullname', 'asc'));
        onSnapshot(donationsRef, async (snapshot) => {
            // Maps the documents and sets them to the `msgs` state.

            const total = await Promise.all(snapshot.docs.map(async doc => {
                const data = doc.data();
                return {
                    id: doc.id,
                    ...data,
                    timeslot: prettyDate(new Date(data.timeslot.seconds ?? data.timeslot)),
                    announcement:
                        data.announcement && await getAnnouncement(data.announcement.id),

                }
            }))
            setList(total)
        })

    }, [])


    const columns = useMemo(
        () => [
            {
                Header: "Name",
                accessor: "fullname",
            },
            {
                Header: "Email",
                accessor: "email",
            },
            {
                Header: "Timeslot",
                accessor: "timeslot",
            },
            {
                Header: "Age",
                accessor: "age",
            },
            {
                Header: "Location",
                accessor: "location",
                Cell: (({ value }) => value ?? 'At a center')
            },
            {
                Header: "Blood donated",
                accessor: "announcement",
                Cell: (({ value }) => value ? (value.bloodType + ', ' + value.rh) : '')
            },
            {
                Header: "Declaration",
                accessor: "id",
                Cell: (v) => <Button onClick={() => handleDownload(v)}>Download</Button>
            },

        ],
        []
    );


    // if (!user) {
    //     <Navigate to='/login' replace={true} />
    // }

    // console.log(donations)
    return (
        <AdminLayout>
            <div className="row-between">
                <h2>{donations.length} Donations</h2>
            </div>
            <Table data={donations} columns={columns} />
        </AdminLayout>
    );

};

export default Donations;
