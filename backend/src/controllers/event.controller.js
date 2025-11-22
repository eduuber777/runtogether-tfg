const prisma = require('../config/prisma');

exports.getAllEvents = async (req, res) => {
  try {
    const events = await prisma.event.findMany({
      where: { status: 'PUBLISHED' },
      include: {
        organizer: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
            email: true
          }
        },
        _count: {
          select: { registrations: true }
        }
      },
      orderBy: { date: 'asc' }
    });

    res.json({
      success: true,
      data: events
    });

  } catch (error) {
    console.error('Error en getAllEvents:', error);
    res.status(500).json({
      success: false,
      message: 'Error al obtener eventos'
    });
  }
};

exports.getEventById = async (req, res) => {
  try {
    const { id } = req.params;

    const event = await prisma.event.findUnique({
      where: { id },
      include: {
        organizer: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
            email: true
          }
        },
        registrations: {
          include: {
            user: {
              select: {
                id: true,
                firstName: true,
                lastName: true
              }
            }
          }
        }
      }
    });

    if (!event) {
      return res.status(404).json({
        success: false,
        message: 'Evento no encontrado'
      });
    }

    res.json({
      success: true,
      data: event
    });

  } catch (error) {
    console.error('Error en getEventById:', error);
    res.status(500).json({
      success: false,
      message: 'Error al obtener evento'
    });
  }
};

exports.createEvent = async (req, res) => {
  try {
    const {
      title,
      description,
      date,
      location,
      maxParticipants,
      distance
    } = req.body;

    const event = await prisma.event.create({
      data: {
        title,
        description,
        organizerId: req.user.userId,
        date: new Date(date),
        location: location || {},
        maxParticipants: maxParticipants ? parseInt(maxParticipants) : null,
        distance: distance ? parseFloat(distance) : null,
        status: 'PUBLISHED'
      },
      include: {
        organizer: {
          select: {
            id: true,
            firstName: true,
            lastName: true
          }
        }
      }
    });

    res.status(201).json({
      success: true,
      data: event,
      message: 'Evento creado exitosamente'
    });

  } catch (error) {
    console.error('Error en createEvent:', error);
    res.status(500).json({
      success: false,
      message: 'Error al crear evento'
    });
  }
};

exports.updateEvent = async (req, res) => {
  try {
    const { id } = req.params;

    const event = await prisma.event.findUnique({
      where: { id }
    });

    if (!event) {
      return res.status(404).json({
        success: false,
        message: 'Evento no encontrado'
      });
    }

    if (event.organizerId !== req.user.userId) {
      return res.status(403).json({
        success: false,
        message: 'No tienes permiso para actualizar este evento'
      });
    }

    const updateData = {};
    const allowedFields = ['title', 'description', 'date', 'location', 'maxParticipants', 'distance'];

    allowedFields.forEach(field => {
      if (req.body[field] !== undefined) {
        if (field === 'date') {
          updateData[field] = new Date(req.body[field]);
        } else {
          updateData[field] = req.body[field];
        }
      }
    });

    const updatedEvent = await prisma.event.update({
      where: { id },
      data: updateData
    });

    res.json({
      success: true,
      data: updatedEvent,
      message: 'Evento actualizado exitosamente'
    });

  } catch (error) {
    console.error('Error en updateEvent:', error);
    res.status(500).json({
      success: false,
      message: 'Error al actualizar evento'
    });
  }
};

exports.deleteEvent = async (req, res) => {
  try {
    const { id } = req.params;

    const event = await prisma.event.findUnique({
      where: { id }
    });

    if (!event) {
      return res.status(404).json({
        success: false,
        message: 'Evento no encontrado'
      });
    }

    if (event.organizerId !== req.user.userId) {
      return res.status(403).json({
        success: false,
        message: 'No tienes permiso para eliminar este evento'
      });
    }

    await prisma.registration.deleteMany({
      where: { eventId: id }
    });

    await prisma.event.delete({
      where: { id }
    });

    res.json({
      success: true,
      message: 'Evento eliminado exitosamente'
    });

  } catch (error) {
    console.error('Error en deleteEvent:', error);
    res.status(500).json({
      success: false,
      message: 'Error al eliminar evento'
    });
  }
};
