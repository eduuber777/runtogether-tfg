const prisma = require('../config/prisma');

exports.registerToEvent = async (req, res) => {
  try {
    const { eventId } = req.body;

    if (!eventId) {
      return res.status(400).json({
        success: false,
        message: 'El ID del evento es requerido'
      });
    }

    const event = await prisma.event.findUnique({
      where: { id: eventId },
      include: {
        _count: {
          select: { registrations: true }
        }
      }
    });

    if (!event) {
      return res.status(404).json({
        success: false,
        message: 'Evento no encontrado'
      });
    }

    if (event.maxParticipants && event._count.registrations >= event.maxParticipants) {
      return res.status(400).json({
        success: false,
        message: 'El evento está lleno'
      });
    }

    const existingRegistration = await prisma.registration.findFirst({
      where: {
        userId: req.user.userId,
        eventId: eventId
      }
    });

    if (existingRegistration) {
      return res.status(400).json({
        success: false,
        message: 'Ya estás inscrito en este evento'
      });
    }

    const registration = await prisma.registration.create({
      data: {
        userId: req.user.userId,
        eventId: eventId,
        status: 'CONFIRMED'
      },
      include: {
        event: {
          select: {
            id: true,
            title: true,
            date: true,
            location: true
          }
        }
      }
    });

    res.status(201).json({
      success: true,
      data: registration,
      message: 'Inscripción exitosa'
    });

  } catch (error) {
    console.error('Error en registerToEvent:', error);
    res.status(500).json({
      success: false,
      message: 'Error al inscribirse al evento'
    });
  }
};

exports.getMyRegistrations = async (req, res) => {
  try {
    const registrations = await prisma.registration.findMany({
      where: { userId: req.user.userId },
      include: {
        event: {
          include: {
            organizer: {
              select: {
                id: true,
                firstName: true,
                lastName: true
              }
            }
          }
        }
      },
      orderBy: { createdAt: 'desc' }
    });

    res.json({
      success: true,
      data: registrations
    });

  } catch (error) {
    console.error('Error en getMyRegistrations:', error);
    res.status(500).json({
      success: false,
      message: 'Error al obtener inscripciones'
    });
  }
};

exports.cancelRegistration = async (req, res) => {
  try {
    const { id } = req.params;

    const registration = await prisma.registration.findUnique({
      where: { id }
    });

    if (!registration) {
      return res.status(404).json({
        success: false,
        message: 'Inscripción no encontrada'
      });
    }

    if (registration.userId !== req.user.userId) {
      return res.status(403).json({
        success: false,
        message: 'No tienes permiso para cancelar esta inscripción'
      });
    }

    await prisma.registration.delete({
      where: { id }
    });

    res.json({
      success: true,
      message: 'Inscripción cancelada exitosamente'
    });

  } catch (error) {
    console.error('Error en cancelRegistration:', error);
    res.status(500).json({
      success: false,
      message: 'Error al cancelar inscripción'
    });
  }
};
