import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMzFkODA2NTVlOTc3NWE2MmU2NWRiMiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NzQzODMzMywiZXhwIjoxNjQ3Njk3NTMzfQ.fXew9I5L9V0e_EU5d4_8wlDC0xsyzVouV1OFZ5zXLPk";

export const publicRequest = axios.create({
	baseURL: BASE_URL
});

export const userRequest = axios.create({
	baseURL: BASE_URL,
	header: { token: `Bearer ${TOKEN}` }
});