export function success({ res, status = 200, data }) {
  return res.status(status).json({ ok: true, data });
}

export function failure({ res, status = 500, msg }) {
  return res.status(status).json({ ok: false, msg });
}
