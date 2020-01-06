const Team = require('../models/Team');

module.exports = {
    get: (params) => {
        return new Promise((resolve, reject) => {
            Team.find(params).then(data => {
                resolve(data);
            }).catch(err => {
                reject(err);
            });
        });
    },
    getById: (id) => {
        return new Promise((resolve, reject) => {
            Team.findById(id).then(data => {
                resolve(data);
            }).catch(err => {
                reject(new Error(`Team ${id} not found`));
            });
        });
    },
    post: (params) => {
        return new Promise((resolve, reject) => {
            Team.create(params).then(data => {
                resolve(data);
            }).catch(err => {
                reject(err);
            })
        });
    },
    put: (id, params) => {
        return new Promise((resolve, reject) => {
            Team.findByIdAndUpdate(id, params, { new: true }).then(data => {
                resolve(data);
            }).catch(err => {
                reject(err);
            });
        });
    },
    delete: (id) => {
        return new Promise((resolve, reject) => {
            Team.findByIdAndRemove(id).then(() => {
                resolve({
                    id
                });
            }).catch(err => {
                reject(err);
            });
        });
    }
};