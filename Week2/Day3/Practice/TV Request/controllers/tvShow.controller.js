import tvShows from "../models/tvShow.model.js";

const showAll = {
	allTvShows: (req, res) => {
		res.json(tvShows);
	},
	showPerYear: (req, res) => {
		const year = parseInt(req.params.yearCreated);
		const getByYear = tvShows.filter((show) => show.yearCreated === year);
		res.json(getByYear);
	},
	delete: (req, res) => {
		const deleteShow = req.params.tvShow;
		const title = tvShows.findIndex((show) => show.tvShow == deleteShow);
		tvShows.splice(title, 1);
		res.json(tvShows);
	},
	update: (req, res) => {
		tvShows.forEach((show, idx) => {
			if (show.tvShow == req.params.tvShow) {
				show.starring = req.body.starring;
			}
		});
		const updatedTvShow = tvShows.find(
			(show) => show.tvShow == req.params.tvShow
		);
		res.json(updatedTvShow);
	},
	insert: (req, res) => {
		tvShows.push(req.body);
		res.json(tvShows);
	},
};

export default showAll;
